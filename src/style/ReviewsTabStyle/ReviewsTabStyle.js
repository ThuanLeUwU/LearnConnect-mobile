import { Colors, SH, SW, SF, Fonts } from '../../Utiles';
import { StyleSheet, Dimensions } from 'react-native';

export default ReviewsTabStyle = (Colors) => StyleSheet.create({

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
    marginBottom: SH(20)
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
  },
  textviewsetwhishlist: {
    width: '55%',
    paddingRight: SH(20),
  },
  dolardigittext: {
    fontSize: SF(18),
    width: '100%',
    fontFamily: Fonts.DMSans_Medium,
    marginTop: '3%',
    marginBottom: '2%',
    color: 'black',
  },
  setdollardtextset: {
    fontSize: SF(18),
    width: '100%',
    fontFamily: Fonts.DMSans_Medium,
    marginTop: '0%',
    marginBottom: '2%',
    color: 'gray',
    position: 'relative',
    left: '19%',
    paddingBottom: 20,
    width: '85%',
    paddingRight: 5,
  },
  onlydigittext: {
    fontSize: 16.5,
    color: 'black',
    marginTop: '3%',
  },
  stariconstyle: {
    color: 'hsl(214.3, 83.2%, 51%)',
    flexDirection: 'row',
    marginTop: '2%',
    marginRight: '2%'
  },
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    right: SH(5),
  },
  unlockrdtext: {
    color: 'hsl(214.3, 83.2%, 51%)',
    paddingTop: SH(6),
    fontFamily: Fonts.DMSans_Medium,
  },
  setreviesstyleimage: {
    height: SW(50),
    width: SW(50),
    borderRadius: SH(7),
    marginRight: SH(10)
  },
  reviewflex: {
    flexDirection: 'row',
  },
  flexratingandtext: {
    flexDirection: 'row',
  },
  chengecolorstyle: {
    color: 'hsl(27.7, 73.8%, 62.5%)',
    flexDirection: 'row',
    fontSize: SF(18),
  },
  unsetcolor: {
    color: 'hsl(27.7, 73.8%, 62.5%)',
    flexDirection: 'row',
    fontSize: SF(20),
    position: 'relative',
    top: SH(1),
  },
  iconview: {
    flexDirection: 'row',
  },
  datetextrstyle: {
    fontSize: SF(16),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.theme_backgound,
    width: '100%'
  }
});
