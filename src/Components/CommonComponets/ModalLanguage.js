import React, {useState, useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import '../../Screens/Authantication/SelectLanguage/i18n';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Modal, VectorIcons, LanguageSelectFlat} from '../../Components';
import {LanguageStyles} from '../../style';
import {SF, LanguageDropdownData} from '../../Utiles';

const ModalLanguage = props => {
  const {modalVisible, setModalVisible, close, changeLang} = props;
  const {t, i18n} = useTranslation();
  const [isFocus, setIsFocus] = useState(false);
  const [IconChange, SetIconChange] = useState('');
  const [selectLanguage, setSelectLanguage] = useState('en');
  const [selectLabel, setSelectLabel] = useState('');
  const {Colors} = useTheme();
  const LanguageStyle = useMemo(() => LanguageStyles(Colors), [Colors]);

  return (
    <View>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible()}
        close={() => close()}>
        <View style={LanguageStyle.LanguageViewStyleModal}>
          <View style={LanguageStyle.FlexViewStyle}>
            <TouchableOpacity
              style={LanguageStyle.CloseButtonStyle}
              onPress={() => {
                setModalVisible(false);
              }}>
              <VectorIcons
                name="window-close"
                icon="FontAwesome"
                size={SF(35)}
                color={Colors.theme_backgound}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={LanguageDropdownData}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <LanguageSelectFlat
                item={item}
                index={index}
                setIsFocus={setIsFocus}
                IconChange={IconChange}
                selectLanguage={selectLanguage}
                selectLabel={selectLabel}
                setSelectLanguage={setSelectLanguage}
                SetIconChange={SetIconChange}
                onPress={() => {
                  setSelectLanguage(item.value);
                  setSelectLabel(item.label);
                  SetIconChange(index);
                  setModalVisible(false);
                  changeLang(item.label);
                }}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
    </View>
  );
};
export default ModalLanguage;
