import {
    StatusBar,
    View,
    FlatList,
    Pressable,
    Text,
    Alert,
    ScrollView,
} from 'react-native';
import Header from '../components/game/Header';
import { useContext, useEffect, useRef, useState } from 'react';
import { GameContext } from '../store/GameContext';
import { GLOBAL_STYLES } from '../styles/SharedStyles';
import SectionHeader from '../components/game/SectionHeader';
import { NPC } from '../models/Types';
import { getData } from '../services/DataService';
import ModalContentWrapper from '../components/game/ModelContentWrapper';
import SocialInteractions from '../components/game/SocialIntercations';
import { SCREEN } from '../styles/SocialScreenStyles';
import {
    GAME_TEXT_CONSTANTS,
    PLAYER_CONSTANTS,
} from '../constants/GameConstants';
import { SCROLL_VIEW_STYLES } from '../styles/ComponentStyles';

export default function SocialScreen() {
    const context = useContext(GameContext);
    const [npc, setNpc] = useState<NPC | null>(null);
    const [showModel, setShowModel] = useState(false);
    const NPCS = useRef(new Array<NPC>());

    const availableNpcs = NPCS.current.filter(
        (npc) =>
            npc.age <= Math.floor(context.days / PLAYER_CONSTANTS.DAY_IN_YEAR)
    );

    const modal =
        npc == null ? (
            <></>
        ) : (
            <ModalContentWrapper
                title={npc.name}
                closeModal={() => setNpc(null)}
                isOpened={showModel}
            >
                <Text>Relationship: {npc.relationshipType}</Text>
                <Text>Description: {npc.desc}</Text>
                <Text>Marital Status: {npc.maritalStatus}</Text>
                <Text>Work: {npc.work}</Text>
                <SocialInteractions name={npc.name} setDeed={setDeedHandler} />
            </ModalContentWrapper>
        );

    const content =
        availableNpcs.length == 0 ? (
            <View style={SCROLL_VIEW_STYLES.emptyContainer}>
                <Text style={SCROLL_VIEW_STYLES.emptyText}>
                    No items available
                </Text>
            </View>
        ) : (
                <ScrollView>
                    {availableNpcs.map((item, index) => (
                        <Item
                            key={item.name}
                            npc={item}
                            onPress={() => {
                                setNpc(availableNpcs[index]);
                            }}
                        />
                    ))}
                </ScrollView>
        );

    useEffect(() => {}, [context.days]);

    useEffect(() => {
        getData<NPC>('npc')
            .then((res) => (NPCS.current = res))
            .catch((_) =>
                Alert.alert('Error Connecting to Server', 'Please Try Later')
            );
    }, []);

    useEffect(() => {
        setShowModel(npc == null ? false : true);
    }, [npc]);

    function setDeedHandler({ name, deed }: { name: string; deed: number }) {
        switch (deed) {
            case 0:
                break;
            case -1:
                context.setBadDeeds([...context.badDeeds, name]);
                break;
            case 1:
                context.setGoodDeeds([...context.goodDeeds, name]);
        }

        setNpc(null);
    }

    return (
        <>
            <StatusBar hidden={true} />
            <Header
                username={context.username}
                userTitle={context.title}
                balance={context.money}
            />
            <SectionHeader
                heading={GAME_TEXT_CONSTANTS.HEADING_SOCIAL_SECTION}
            />
            {content}
            {modal}
        </>
    );
}

function Item({ npc, onPress }: { npc: NPC; onPress: () => void }) {
    return (
        <Pressable onPress={onPress}>
            <View style={[SCREEN.item, GLOBAL_STYLES.flexColumn]}>
                <View style={[GLOBAL_STYLES.flexRow, SCREEN.cardHeader]}>
                    <Text style={SCREEN.title}>{npc.name}</Text>
                    <Text style={SCREEN.type}>{npc.relationshipType}</Text>
                </View>
                <Text style={SCREEN.description}>{npc.desc}</Text>
            </View>
        </Pressable>
    );
}
