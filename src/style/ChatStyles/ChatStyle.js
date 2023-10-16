import { StyleSheet, Dimensions, Platform } from 'react-native';
import {  Fonts, SF, SH, SW } from '../../Utiles';

export default ChatStyle = (Colors) => StyleSheet.create({

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
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: SH(200),
    paddingTop: SH(5),
  },
  flexrowjucenter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Chatstyleone: {
    backgroundColor: Colors.theme_backgound,
    paddingTop: SH(5),
    paddingBottom: SH(4),
    paddingHorizontal: SH(10),
    width: '70%',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  flexrowjucentertwo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textcolormessage: {
    color: Colors.white_text_color,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(16),
  },
  textcolormessagetwoset: {
    color: Colors.white_text_color,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(12),
    paddingTop: SH(6),
  },
  textcolormessagetwosettwo: {
    color: Colors.white_text_color,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(12),
    paddingTop: SH(6),
  },
  datesndtimecolor: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(14),
    textAlign: 'center',
    paddingTop: SH(5),
    fontWeight: '600'
  },
  datesndtimecolortwo: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(14),
    textAlign: 'left',
    paddingTop: SH(5),
    fontWeight: '600',
    position: 'relative',
    left: SH(60),
  },
  seimagstyleendcall: {
    width: SW(50),
    height: SH(50),
    borderRadius: SH(100),
  },
  likeimagesetstyle: {
    width: SW(50),
    height: SH(50),
    borderRadius: SH(100),
    marginLeft: 5,
    tintColor: '#ffcc5b',
  },
  leftimagelike: {
    marginLeft: SH(10),
  },
  messageminviewowner: {
    backgroundColor: '#c2c0c0',
    paddingTop: SH(6),
    paddingBottom: SH(4),
    paddingHorizontal: SH(10),
    marginLeft: SH(10),
    width: '70%',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  postionabsoluteview: {
    position: 'absolute',
    backgroundColor: Colors.white_text_color,
    bottom: SH(0),
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 10,
  },
  textmessageview: {
    marginTop: SH(10),
    marginHorizontal: SH(20)
  },
  messagetextcolor: {
    color: Colors.gray_text_color,
    fontSize: SF(18),
  },
  textinputborderbottom: {
    padding: SH(0),
    width: SW(200),
    fontSize: SF(16),
  },
  bottombuttoncolorset: {
    width: '70%'
  },
  flexrowsetsendmesasagew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SH(10)
  },
  setmarginrightlikeicon: {
    marginLeft: SH(20),
  },
  flexrowimaginations: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  marginbottomsetspace: {
    marginBottom: SH(20),
  },
  flexcheckset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  seticonpotion: {
    position: 'relative',
    top: SH(-16.5),
  },
  setrighticonviewstyle: {
    position: 'relative',
    top: SH(9),
    paddingLeft: SH(5),
  }
});
