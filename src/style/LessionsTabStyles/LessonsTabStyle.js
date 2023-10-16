import { Colors,Fonts,SF,SW,SH } from '../../Utiles';
import { StyleSheet } from 'react-native';

export default LessonsTabStyle = (Colors) => StyleSheet.create({

  overviewtabminview: {
    width: '100%',
    height: '100%',
    paddingHorizontal: SH(15),
    marginTop: SH(10),
    marginBottom: SH(50),
  },
  whiteboxwhishlist: {
    width: '100%',
    borderBottomWidth: SH(0.5),
    paddingBottom: SH(18),
  },
  whiteboxwhishlistTwo: {
    width: '100%',
  },
  flexDirectiwhilist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: SH(15),
    paddingRight: Platform.OS === 'ios' ? 15 : 0,
    alignItems: 'center',
  },
  textviewsetwhishlist: {
    width: '75%',
    paddingRight: SH(35),
  },
  designfonttext: {
    fontSize: SF(16),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
    width: '100%'
  },
  dolardigittext: {
    fontSize: SF(16),
    width: '100%',
    fontFamily: Fonts.DMSans_Medium,
    marginTop: '3%',
    marginBottom: '2%',
    color: 'black',
  },
  onlydigittext: {
    fontSize: SF(16.5),
    color: 'black',
    marginTop: '3%',
  },
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    right: SH(5),
  },
  setimageborser: {
    width: SW(110),
    height: SW(110),
    marginRight: SH(10),
    borderRadius: SH(7),
  },
  unlocktextstyle: {
    color: Colors.theme_backgound,
    paddingTop: SH(6),
    fontFamily: Fonts.DMSans_Medium,
  }
});
