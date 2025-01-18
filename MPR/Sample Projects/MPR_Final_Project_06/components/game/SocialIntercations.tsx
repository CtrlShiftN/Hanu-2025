import { useRef } from 'react';
import ModalButton from './ModalButton';
import { getRandomElement, shuffleList } from '../../utils/random';
import { USER_RESPONSES } from '../../data/dummy-data';


export default function SocialInteractions({
    setDeed,
    name,
}: {
    setDeed: ({ name, deed }: { name: string; deed: number }) => void;
    name: string;
}) {
    const INTERACTIONS = useRef(USER_RESPONSES);
    const goods = INTERACTIONS.current.filter((i) => i.deed == 1);
    const bads = INTERACTIONS.current.filter((i) => i.deed == -1);
    const options = useRef(
        shuffleList([
            getRandomElement(goods),
            getRandomElement(bads),
            getRandomElement(USER_RESPONSES),
        ])
    );

    return (
        <>
            {options.current.map((opt, i) => (
                <ModalButton
                    key={i}
                    onPress={() =>
                        setDeed({
                            name: name,
                            deed: opt.deed,
                        })
                    }
                    buttonText={opt.desc}
                />
            ))}
        </>
    );
}