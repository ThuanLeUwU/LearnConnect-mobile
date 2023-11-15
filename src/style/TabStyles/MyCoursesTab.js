import { StyleSheet, Dimensions } from 'react-native';
import { SF, SH, SW, Fonts } from '../../Utiles';

export default MyCoursesTabStyle = (Colors) => StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1
  },
  titleStyle: {
    color: Colors.white_text_color,
    fontWeight: "bold",
    fontSize: SF(18)
  },
  flexDirectionrowskipnext: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  homeheadertext: {
    color: Colors.white_text_color,
    fontWeight: '700',
    fontSize: SF(25),
  },
  whiteboxwhishlist: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    textAlign: 'center',
    flexDirection: 'row',
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    marginBottom: SH(10),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  whilistminbody: {
    width: '93%',
    marginHorizontal: '3.3%',
    marginTop: '0%',
    marginBottom: SH(5),

  },
  flexDirectiwhilist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: SH(10),
    paddingVertical: SH(10)
  },
  textviewsetwhishlist: {
    width: '63%',
    paddingRight: SH(15),
  },
  designfonttext: {
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    width: '80%',
    textAlign:'left'
  },
  dolardigittext: {
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Bold,
    color: Colors.black_text_color,
    marginTop: '3%',
  },
  onlydigittext: {
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Bold,
    color: Colors.gray_text_color,
    width: '100%',
    marginTop: '3%',
  },
  topspaceview: {
    marginTop: '7%',
  },
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  onlydigittext: {
    fontSize: SF(16),
    fontWeight: '700',
    color: Colors.gray_text_color,
    marginTop: '3%',
    marginRight: '3%'
  },
  hometextheadercolor: {
    color: 'hsl(214.3, 83.2%, 51%)',
    fontSize: SF(23),
    fontWeight: '700',
    marginTop: SH(12),
    paddingLeft: SH(15),
  },
  minviewarroandtitle: {
    flexDirection: 'row',
    paddingLeft: SH(0),
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? SH(15) : SH(0),
  },
  leftarrostyle: {
    paddingTop: SH(15),
    marginRight: SH(20),
  },
  flexrowheart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '97.5%',
  },
  setheart: {
    color: Colors.theme_backgound,
  },
  flexrowheartsettwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '97.5%',
    position: 'absolute',
    bottom: SH(0),
  },
  settimevideo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SH(15),
  },
  clockimage: {
    color: Colors.gray_text_color,
    marginRight: SH(3),
  },
  timevodeoset: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
  },
  videotextstyle: {
    fontSize: SF(14),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.theme_backgound,
    width: '100%',
    marginTop: '3%',
  },
  barbarvideo: {
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Bold,
    color: Colors.theme_backgound,
    width: '100%',
    marginTop: '3%',
  },
  setimagestykle: {
    width: SW(100),
    height: SW(100),
    marginRight: SH(0),
    borderRadius: SH(10),
  },
  videoandtextsetup: {
    paddingTop:SH(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '97.5%',
    alignItems: 'center',
  }
});