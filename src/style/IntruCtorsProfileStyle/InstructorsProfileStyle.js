import { SW, SH, SF } from '../../Utiles';
import { StyleSheet, Platform } from 'react-native';

export default ProfileStyles = (Colors) => StyleSheet.create({
  
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minviewsigninscreen: {
    width: '100%',
    paddingHorizontal: SH(10),
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  profilebgwhiteset: {
    backgroundColor: Colors.white_text_color,
    color: Colors.black_text_color,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: SH(7),
    paddingBottom: SH(10),
    paddingTop: SH(20),
    width: '100%',
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  imagsetstyle: {
    width: SW(70),
    height: SW(70),
    borderRadius: SH(100),
  },
  marginrightsetwidth: {
    width: '48%',
    paddingTop: SH(5),
    paddingBottom: SH(7),
    marginRight: SH(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  setminviewstyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  centerviewstyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textsetsimple: {
    marginTop: SH(10),
    color: Colors.black_text_color,
    fontSize: SF(16),
    textAlign: 'center'
  },
  jobtextstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: SH(9),
    color: Colors.theme_backgound,
    fontSize: SF(19),
    fontWeight: '700'
  },
  setbgcolorviewstyle: {
    backgroundColor: Colors.red_color_set,
    width: SW(30),
    height: SW(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SH(100),
  },
  centerviewstyletwostyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: SH(10),
    zIndex: 20,
    position: 'absolute',
    right: SH(-20),
  },
  centimagebottomview: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  centertext: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: SH(7),
  }
});
