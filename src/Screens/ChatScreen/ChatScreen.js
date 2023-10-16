import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, } from "react-native";
import images from '../../index';
import { SF } from '../../Utiles';
import { Container, VectorIcons } from '../../Components';
import { Style, ChatStyle } from "../../style";
import { useTranslation } from "react-i18next";

const ChatScreen = () => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const ChatStyles = useMemo(() => ChatStyle(Colors), [Colors]);

  return (
    <Container>
      <View style={ChatStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={ChatStyles.minflexview}>
              <View style={ChatStyles.minviewsigninscreen}>
                <View style={ChatStyles.marginbottomsetspace}>
                  <View style={ChatStyles.flexrowjucentertwo}>
                    <View style={ChatStyles.leftimage}>
                      <Image source={images.videocall_four_img} style={ChatStyles.seimagstyleendcall} resizeMode={'cover'} />
                    </View>
                    <View style={ChatStyles.messageminviewowner}>
                      <Text style={ChatStyles.textcolormessage}>{t("ChatText_Let_Me")}</Text>
                      <Text style={ChatStyles.textcolormessagetwoset}>03:16</Text>
                    </View>
                  </View>
                  <Text style={ChatStyles.datesndtimecolor}>10 Feb,2022</Text>
                </View>
                <View style={ChatStyles.marginbottomsetspace}>
                  <View style={ChatStyles.flexrowjucenter}>
                    <View style={ChatStyles.Chatstyleone}>
                      <Text style={ChatStyles.textcolormessage}>{t("Chattext_Actually_I_Have")}</Text>
                      <View style={ChatStyles.flexcheckset}>
                        <View>
                          <Text style={ChatStyles.textcolormessagetwosettwo}>03:18</Text>
                        </View>
                        <View style={ChatStyles.setrighticonviewstyle}>
                          <VectorIcons
                            icon="AntDesign"
                            size={SF(24)}
                            name="check"
                            color={Colors.white_text_color}
                          />
                          <VectorIcons
                            icon="AntDesign"
                            size={SF(24)}
                            name="check"
                            color={Colors.white_text_color}
                            style={ChatStyles.seticonpotion}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={ChatStyles.marginbottomsetspace}>
                  <View style={ChatStyles.flexrowjucentertwo}>
                    <View style={ChatStyles.leftimage}>
                      <Image source={images.videocall_four_img} style={ChatStyles.seimagstyleendcall} resizeMode={'cover'} />
                    </View>
                    <View style={ChatStyles.messageminviewowner}>
                      <Text style={ChatStyles.textcolormessage}>{t("Chat_Can_You_Just")}</Text>
                      <Text style={ChatStyles.textcolormessagetwoset}>03:19</Text>
                    </View>
                  </View>
                </View>
                <View style={ChatStyles.marginbottomsetspace}>
                  <View style={ChatStyles.flexrowjucenter}>
                    <View style={ChatStyles.Chatstyleone}>
                      <Text style={ChatStyles.textcolormessage}>{t("Chat_Multipal_Project")}</Text>
                      <View style={ChatStyles.flexcheckset}>
                        <View>
                          <Text style={ChatStyles.textcolormessagetwosettwo}>03:19</Text>
                        </View>
                        <View style={ChatStyles.setrighticonviewstyle}>
                          <VectorIcons
                            icon="AntDesign"
                            size={SF(24)}
                            name="check"
                            color={Colors.white_text_color}
                          />
                          <VectorIcons
                            icon="AntDesign"
                            size={SF(24)}
                            name="check"
                            color={Colors.white_text_color}
                            style={ChatStyles.seticonpotion}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={ChatStyles.marginbottomsetspace}>
                  <View style={ChatStyles.flexrowjucentertwo}>
                    <View style={ChatStyles.leftimage}>
                      <Image source={images.videocall_four_img} style={ChatStyles.seimagstyleendcall} resizeMode={'cover'} />
                    </View>
                    <View style={ChatStyles.messageminviewowner}>
                      <Text style={ChatStyles.textcolormessage}>{t("Chat_Excellent")}</Text>
                      <Text style={ChatStyles.textcolormessagetwoset}>03:20</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={ChatStyles.flexrowjucentertwo}>
                    <View style={ChatStyles.leftimage}>
                      <Image source={images.videocall_four_img} style={ChatStyles.seimagstyleendcall} resizeMode={'cover'} />
                    </View>
                    <View style={ChatStyles.leftimagelike}>
                      <VectorIcons
                        icon="AntDesign"
                        size={SF(38)}
                        name="like1"
                        color={'#ffcc5b'}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={ChatStyles.postionabsoluteview}>
          <View style={ChatStyles.textmessageview}>
            <View style={ChatStyles.flexrowsetsendmesasagew}>
              <View>
                <TextInput
                  style={ChatStyles.textinputborderbottom}
                  placeholder={t("Write_A_Reply")}
                  placeholderTextColor={Colors.gray_text_color}
                />
              </View>
              <View style={ChatStyles.flexrowimaginations}>
                <TouchableOpacity>
                  <VectorIcons
                    icon="FontAwesome5"
                    size={SF(25)}
                    name="grin"
                    color={Colors.theme_backgound}
                    style={ChatStyles.iconChatStyleseacrch}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={ChatStyles.setmarginrightlikeicon}>
                  <VectorIcons
                    icon="Ionicons"
                    size={SF(30)}
                    name="send"
                    color={Colors.theme_backgound}
                    style={ChatStyles.iconChatStyleseacrch}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};
export default ChatScreen;
