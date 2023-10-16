import { SF, SH,} from '../../Utiles';
import { StyleSheet, Platform } from 'react-native';

export default OnlineClassStyle = (Colors) => StyleSheet.create({

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
    paddingBottom: SH(20),
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bgcolorwhiteset: {
    backgroundColor: Colors.white_text_color,
    color: Colors.black_text_color,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: SH(10),
    paddingHorizontal: SH(10),
    paddingTop: SH(10),
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setbuttonwidthstyle: {
    width: '30%'
  },
  flexendbuttonset: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flexrowsettextandbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: SH(10),
  },
  flexrowsettextandbuttontwoset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: SH(10),
    borderTopColor: Colors.light_gray_text_color,
    borderBottomColor: Colors.light_gray_text_color,
    paddingTop: SH(10),
    paddingBottom: SH(5),
    borderTopWidth: SH(1),
    borderStyle: 'dashed',
  },
  dateviewstyle: {
    flexDirection: 'row'
  },
  datetextstyles: {
    fontSize: SF(16),
    color: Colors.theme_backgound,
    fontWeight: '700'
  },
  textwidth: {
    width: '70%'
  },
  mintitlestyle: {
    fontSize: SF(20),
    color: Colors.theme_backgound,
    fontWeight: '700'
  },
  setbuttonstyle: {
    backgroundColor: Colors.white_text_color,
  },
  endbuttonstyles: {
    backgroundColor: Colors.white_text_color,
    borderWidth: SH(1),
    height: SH(36),
    padding: SH(0),
    borderColor: Colors.red_color_set,
  },
  redtextcolor: {
    color: Colors.red_color_set,
  },
  buttonStyle: {
    height: SH(36),
    padding: SH(0),
  }
});
