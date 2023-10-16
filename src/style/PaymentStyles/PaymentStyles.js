import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../Utiles';

export default PaymentStyles = (Colors) => StyleSheet.create({
  inputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: SF(12),
    width: '100%',
    paddingTop: SH(10),
    paddingBottom: SH(7),
    height: SH(47),
    color: Colors.gray_text_color,
    fontSize: SF(17),
    borderRadius: SH(7),
    backgroundColor: Colors.white_text_color,
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  numberinputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: SH(12),
    width: '100%',
    paddingTop: SH(12),
    paddingBottom: SH(7),
    height: SH(47),
    color: Colors.gray_text_color,
    fontSize: SF(17),
    borderRadius: 7,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  minviewallcontent: {
    width: '90%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flexrowpassword: {
    width: '100%',
    borderRadius: SH(7),
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: SH(15),
    height: SH(47),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setinputpassword: {
    width: '80%',
    color: Colors.gray_text_color,
    fontSize: SF(17),
    padding: SH(0),
    paddingTop: SH(5),
    fontFamily: Fonts.Poppins_Medium,
  },
  headerstylebgcolor: {
    backgroundColor: Colors.header_colors,
  },
  minviewaudioacall: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: SH(15)
  },
  setheaderspacepadding: {
    height: SH(60),
    backgroundColor: Colors.header_colors,
    paddingTop: SH(10),
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SH(22),

  },
  modalView: {
    backgroundColor: Colors.white_text_color,
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: SH(20),
    width: '95%'
  },
  setbgcolorgrsay: {
    backgroundColor: Colors.gray_text_color,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SH(22),
  },
  closeIcon: {
    position: 'absolute',
    right: SH(15),
    top: SH(16),
    height: SH(40),
    width: SW(40),
    backgroundColor: Colors.header_colors_3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SH(7),
  },
  iconclosestyle: {
    color: Colors.white_text_color,
    paddingBottom: SH(3),
  },
  checkiconright: {
    borderColor: Colors.header_colors_3,
    borderWidth: SW(3),
    height: SW(80),
    width: SW(80),
    borderRadius: SH(100),
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  setroundcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  setbackgroundicon: {
    color: Colors.header_colors_3,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: SH(15),
  },
  registertextset: {
    paddingTop: SH(25),
    paddingBottom: SH(0),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settext: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    paddingHorizontal: SH(20),
    textAlign: 'center',
    fontFamily: Fonts.DMSans_Medium,
  },
  setokbutton: {
    width: '30%'
  },
  buttonminview: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: SH(20),
  },
  setbuttonstyle: {
    backgroundColor: 'red',
    width: '50%'
  },
  setinputstyleapply: {
    paddingHorizontal: SH(12),
    width: '100%',
    paddingTop: SH(10),
    paddingBottom: SH(7),
    height: SH(50),
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.DMSans_Medium,
    borderRadius: 7,
    backgroundColor: Colors.header_colors,
  },
  setalldetailesminview: {
    paddingTop: SH(70),
  },
  setbgimage: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: '100%'
  },
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topBg: {
    height: SH(150),
    width: '100%',
  },
  title: {
    marginTop: SH(80),
    width: 'auto',
    position: 'absolute',
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.white_text_color,
    fontSize: SF(24),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: SF(36)
  },
  chideContainer: {
    width: '100%',
    marginTop: SH(10),
    paddingHorizontal: SH(8),
    paddingVertical: SH(20),
    backgroundColor: 'white',
    borderRadius: SW(7)
  },
  sectionView: {
    width: '100%',
    padding: SH(5),
    flexDirection: 'row',
    marginVertical: SH(5),
  },
  iconStyle: {
    height: SH(20),
    width: SH(20),
    position: 'relative',
    top: SH(2),
  },
  leblaStyle: {
    width: '80%',
    marginLeft: SW(15),
    fontFamily: Fonts.DMSans_Medium,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: SF(18),
    lineHeight: SF(24),
    color: 'black'
  },
  datasciencewidth: {
    width: '100%',
    fontFamily: 'DMSans-Medium',
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.theme_backgound,
    fontSize: SF(17),
    textAlign: 'left',
    paddingLeft: SH(15),
    paddingBottom: SH(10),
  },
  app_icon: {
    width: SH(45),
    height: SH(45),
    marginRight: SH(30),
    borderRadius: SH(5),
  },
  app_icontwo: {
    width: SH(30),
    height: SH(30),
    marginRight: SH(25),
    borderRadius: SH(5),
    position: 'relative',
    top: SH(7),
    left: SH(8),
  },
  app_iconthree: {
    width: SH(50),
    height: SH(50),
    marginRight: SH(25),
    borderRadius: SH(5),
    color: Colors.header_colors_3,
    position: 'relative',
    top: SH(8),
    left: SH(9),
  },
  upi_label: {
    fontFamily: Fonts.DMSans_Medium,
    fontWeight: '400',
    fontSize: SF(17),
    lineHeight: SF(24),
    color: Colors.header_colors_4,
  },
  setviewstyle: {
    height: '100%',
    width: '90%',
  },
  paywithstyles: {
    width: '100%',
    fontFamily: Fonts.DMSans_Medium,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.theme_backgound,
    fontSize: SF(17),
    textAlign: 'left',
    paddingLeft: SH(0),
    paddingTop: SH(20),
    paddingBottom: SH(10),
  },
  backaerrowsert: {
    tintColor: Colors.white_text_color,
  },
  settoucjbleview: {
    position: 'absolute',
    top: SH(20),
    left: SH(20),
    width: SW(37),
    height: SW(37),
  },
  setwidthpaypal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SH(-10),
  },
  setimagewidth: {
    height: SW(40),
    width: SW(40),
    marginRight: SH(10),
    position: 'relative',
    left: SH(-8)
  },
  flexrowsetnew: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'white',
    width: '95%',
    justifyContent: 'space-between',
    borderRadius: SH(7),
    paddingLeft: SH(30),
    paddingVertical: SH(10)
  },
  setbgcolor: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexrowsimpleimagtext: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  setnormalborderview: {
    width: '100%',
    borderBottomColor: Colors.gray_text_color,
    borderBottomWidth: SH(1),
    borderStyle: 'dashed',
  },
  whitebgcolor: {
    backgroundColor: Colors.white_text_color,
    paddingBottom: SH(30),
    borderRadius: SH(7),
  },
  setminviewwidth: {
    width: '90%',
    marginHorizontal: '5%'
  },
});