import { StyleSheet } from 'react-native';
import { SH, SW, SF, Colors } from '../../Utiles';

// export default ColorpickerStyle = (Colors) => StyleSheet.create({
export default StyleSheet.create({
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray_text_color,
    opacity: 0.9,
  },
  CenteredViewtwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalView: {
    margin: SH(20),
    backgroundColor: Colors.white_text_color,
    borderRadius: SH(7),
    paddingHorizontal: SH(5.7),
    paddingBottom: SH(30),
    alignItems: "center",
    width: '92%',
  },
  button: {
    borderRadius: SH(20),
    padding: SH(10),
  },
  textStyle: {
    color: Colors.white_text_color,
    fontWeight: "bold",
    textAlign: "center",
  },
  ModalText: {
    paddingBottom: SH(15),
    textAlign: "center",
  },
  SetHeight: {
    height: SH(300),
  },
  setbuttonwidth: {
    paddingTop: SH(30),
    width: '100%'
  },
  setcolorwhite: {
    color: Colors.white_text_color,
    paddingTop: SH(15),
    paddingLeft: SH(15),
    fontSize: SF(20),
  },
  colorpickerpickerimagwidth: {
    width: SW(27),
    height: SH(27),
  },
  PaddingRight: {
    paddingRight: SH(10),
  }
});