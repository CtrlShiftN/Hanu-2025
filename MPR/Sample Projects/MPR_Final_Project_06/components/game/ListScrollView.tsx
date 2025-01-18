import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { SCROLL_VIEW_STYLES } from '../../styles/ComponentStyles';

interface ListItemWithName {
    name: string;
    desc: string;
    type?: string;
}

interface ListScrollViewProps<T extends ListItemWithName> {
    itemList: T[];
    onPressItem: (index: number) => void;
}

const ListScrollView = <T extends ListItemWithName>({
    itemList,
    onPressItem,
}: ListScrollViewProps<T>) => {
    if (itemList.length === 0) {
        return (
            <View style={SCROLL_VIEW_STYLES.emptyContainer}>
                <Text style={SCROLL_VIEW_STYLES.emptyText}>
                    No items available
                </Text>
            </View>
        );
    }

    return (
        <ScrollView>
            {itemList.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => onPressItem(index)}
                >
                    <View style={SCROLL_VIEW_STYLES.item}>
                        <View style={SCROLL_VIEW_STYLES.itemDiv}>
                            <Text style={SCROLL_VIEW_STYLES.title}>{item.name}</Text>
                            <Text style={SCROLL_VIEW_STYLES.description}>{item.desc}</Text>

                            {item.type && (
                                <Text style={SCROLL_VIEW_STYLES.progressText}>
                                    {item.type}
                                </Text>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default ListScrollView;
