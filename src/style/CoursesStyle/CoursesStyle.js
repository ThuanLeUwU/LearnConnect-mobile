import { StyleSheet, Dimensions } from 'react-native';
import { SH, SW, SF, Fonts } from '../../Utiles';

export default CoursesStyle = (Colors) => StyleSheet.create({
    keybordtopviewstyle: {
        height: '100%',
        width: '100%',
        flex: 1
    },
    minstyleviewphotograpgy: {
        height: '100%',
        width: '100%',
    },
    minviewsigninscreen: {
        width: '92%',
        marginHorizontal: '4%',
        marginTop: '0%',
    },
    whiteboxwhishlist: {
        backgroundColor: Colors.white_text_color,
        width: '100%',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: SH(7),
        shadowColor: Colors.black_text_color,
        marginBottom: SH(12),
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
    },
    flexDirectiwhilist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: SH(10),
        paddingRight: SH(30),
        paddingVertical:SH(10)
    },
    textviewsetwhishlist: {
        width: '62%',
    },
    designfonttext: {
        fontSize: SF(16),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.black_text_color,
        width: '100%'
    },
    dolardigittext: {
        fontSize: SF(17),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.black_text_color,
        width: '100%',
        marginTop: '3%',
    },
    onlydigittext: {
        fontSize: SF(16),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.gray_text_color,
        marginTop: '3%',
        marginRight: '3%'
    },
    stariconstyle: {
        color: 'hsl(27.7, 73.8%, 62.5%)',
        flexDirection: 'row',
        marginTop: '2%',
    },
    chengecolorstyle: {
        color: 'hsl(27.7, 73.8%, 62.5%)',
        flexDirection: 'row',
        position: 'relative',
        fontSize: SF(18),
        top: SH(2),
    },
    stariconview: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    imagesetios: {
        marginRight: SH(13),
        width: SW(100),
        height: SH(100),
        borderRadius: SH(7),
    },
    setstartanddolardtext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: SH(0),
        width: '90%'
    },
    setreviewstext: {
        fontSize: SF(15),
        fontFamily: Fonts.DMSans_Medium,
        color: Colors.black_text_color,
        width: '100%',
        position: 'absolute',
        bottom: 25,
    }

});