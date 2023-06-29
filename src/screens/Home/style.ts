import { StyleSheet } from "react-native";
import theme from '../../theme/index';

export const styles = StyleSheet.create({

    containertexts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },

    titlecriadas: {
        color: theme.COLORS.BLUE,
        fontWeight: 'bold',
        marginLeft: 20,
        fontSize: theme.FONT_SIZE.MD,
    },
    titleconcluidas: {
        color: theme.COLORS.BLUE,
        fontWeight: 'bold',
        marginLeft: 20,
        fontSize: theme.FONT_SIZE.MD,
    },

    numbers: {
        backgroundColor: theme.COLORS.PURPLE,
        marginLeft: 10,
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: theme.FONT_SIZE.MD,
        color: 'white',
        paddingHorizontal: 4,
        borderRadius: 10
    },


    listEmpty: {
        color: theme.COLORS.GRAY_100,
        alignItems: 'center',
        padding: 30
    },

    listEmptyText: {
        color: theme.COLORS.GRAY_100,
        alignItems: 'center',
    },
    listEmptyTextBold: {
        color: theme.COLORS.GRAY_100,
        alignItems: 'center',
        fontWeight: 'bold',
    },

    container: {
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
        borderRadius: 7,
        color: theme.COLORS.GRAY_200,
        padding: 16,
        fontSize: 16,
        marginTop: 10,
        marginRight: 10
    },
    button: {
        width: 35,
        height: 35,
        borderRadius: 7,
        backgroundColor: theme.COLORS.BLUE_DARK,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,

    },
    form: {
        top: -50,
        width: '100%',
        flexDirection: 'row',        
        padding: '5%',
    },
})


