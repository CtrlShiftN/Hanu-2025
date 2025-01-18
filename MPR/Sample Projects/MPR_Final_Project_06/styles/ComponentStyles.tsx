import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';
import Sizes from '../constants/Sizes';

export const AGE_STATUS_STYLES = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: Sizes.lg,
        justifyContent: 'center',
        width: '80%',
    },
    ageText: {
        fontSize: Sizes.xl,
        fontWeight: 'bold',
        marginBottom: Sizes.md,
    },
});

export const MODAL_SHARED_STYLE = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: Sizes.xl,
        borderRadius: Sizes.md,
        elevation: Sizes.sm,
        width: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Sizes.md,
    },
    modalTitle: {
        fontSize: Sizes.xl,
        fontWeight: 'bold',
    },
    modalDescription: {
        fontSize: Sizes.lg,
        marginBottom: Sizes.md,
    },
    detail: {
        fontSize: Sizes.lg,
        marginBottom: Sizes.sm,
    },
    button: {
        backgroundColor: Color.red,
        padding: Sizes.md,
        borderRadius: Sizes.sm,
        alignItems: 'center',
        marginTop: Sizes.md,
        width: '50%',
    },
    buttonText: {
        color: '#fff',
        fontSize: Sizes.lg,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonDiv: {
        alignItems: 'center',
    },
});

export const PLAYER_HEADER_STYLES = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        backgroundColor: '#E2E8F0',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Sizes.xl,
        flexDirection: 'row',
    },
    leftCont: {
        flexDirection: 'column',
    },
    rightCont: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    username: {
        fontSize: Sizes.xl,
        fontWeight: 'bold',
    },
    userTitle: {
        fontSize: Sizes.lg,
    },
    balance: {
        fontSize: Sizes.lg,
        fontWeight: 'bold',
    },
});

export const SCROLL_VIEW_STYLES = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Sizes.lg,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    progressText: {
        fontSize: Sizes.md,
        fontWeight: 'bold',
        color: Color.red,
        position: 'absolute',
        top: -10,
        right: 0,
    },
    title: {
        fontSize: Sizes.lg,
        fontWeight: 'bold',
    },
    description: {
        fontSize: Sizes.lg,
        marginTop: Sizes.md,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: Sizes.xl,
    },
    emptyText: {
        fontSize: Sizes.lg,
        color: Color.black,
    },
    itemDiv: {
        width: '100%',
    },
});

export const PLAYER_STATS_STYLES = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E2E8F0',
    },
    statCont: {
        width: '80%',
        justifyContent: 'center',
        height: '100%',
        marginVertical: Sizes.md,
    },
    stat: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        height: 55,
    },
    statRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statLabel: {
        fontWeight: 'bold',
        color: Color.red,
    },
});

export const SECTION_HEADER_STYLES = StyleSheet.create({
    headerCont: {
        backgroundColor: '#334155',
        width: '100%',
    },
    heading: {
        fontSize: Sizes.xl,
        fontWeight: 'bold',
        padding: Sizes.md,
        textAlign: 'center',
        color: '#fff',
    },
});
