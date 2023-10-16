import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import images from '../../index';
import { Style, VideocallStyle } from '../../style';
import { SF } from '../../Utiles';
import { VectorIcons } from '../../Components';
import { useTranslation } from "react-i18next";

const VideoCall = ({ navigation }) => {
    const [Muteicon, SetMuteicon] = useState(0);
    const [Muteicontwo, SetMuteicontwo] = useState(0);
    const [Muteiconthree, SetMuteiconthree] = useState(0);
    const [Muteiconsix, SetMuteiconsix] = useState(0);
    const [Camera, SetCamera] = useState(0);
    const [Cameras, SetCameras] = useState(0);
    const { Colors } = useTheme();
    const VideocallStyles = useMemo(() => VideocallStyle(Colors), [Colors]);
    const { t } = useTranslation();

    StatusBar.setBackgroundColor(Colors.theme_backgound);

    return (
        <View style={VideocallStyles.minstyleviewphotograpgy}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.scrollviewstyles}>
                <KeyboardAvoidingView enabled>
                    <View style={VideocallStyles.minflexview}>
                        <View style={VideocallStyles.minviewsigninscreen}>
                            <View style={VideocallStyles.setimageviewcenter}>
                                <Image style={VideocallStyles.graphimagstyle} resizeMode='stretch' source={images.videocall_five_img} />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={VideocallStyles.setminviewcenterrecording}>
                <View style={VideocallStyles.startrecordingmetting}>
                    <View style={VideocallStyles.timeviewstyle}>
                        <VectorIcons icon="Octicons" name='dot-fill' color={Colors.red_color_set} size={25} />
                    </View>
                    <View>
                        <Text style={VideocallStyles.digittextstyle}>17:42</Text>
                    </View>
                </View>
            </View>
            <View style={VideocallStyles.flexrowtextimage}>
                <View style={VideocallStyles.setfourimgcenterview}>
                    <View>
                        <View style={VideocallStyles.twoimagewisth}>
                            <TouchableOpacity>
                                <Image style={VideocallStyles.imagsetstyle} resizeMode="cover" source={images.videocall_four_img} />
                            </TouchableOpacity>
                        </View>
                        {Muteicon === 0 ?
                            <TouchableOpacity onPress={() => SetMuteicon(1)} style={VideocallStyles.setmuteicon}>
                                <VectorIcons icon="FontAwesome" name='microphone-slash' color={'white'} size={17} />
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => SetMuteicon(0)} style={VideocallStyles.setmuteicon}>
                                <VectorIcons icon="FontAwesome" name='microphone' color={'white'} size={17} />
                            </TouchableOpacity>}
                        <Text style={VideocallStyles.nameVideocallStyleset}>{t("Videocall_title_1")}</Text>
                    </View>
                    <View>
                        <View style={VideocallStyles.twoimagewisth}>
                            <TouchableOpacity>
                                <Image style={VideocallStyles.imagsetstyle} resizeMode="cover" source={images.videocall_three_img} />
                            </TouchableOpacity>
                        </View>
                        {Muteiconthree === 0 ?
                            <TouchableOpacity onPress={() => SetMuteiconthree(1)} style={VideocallStyles.setmuteicon}>
                                <VectorIcons icon="FontAwesome" name='microphone-slash' color={'white'} size={17} />
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => SetMuteiconthree(0)} style={VideocallStyles.setmuteicon}>
                                <VectorIcons icon="FontAwesome" name='microphone' color={'white'} size={17} />
                            </TouchableOpacity>}
                        <Text style={VideocallStyles.nameVideocallStyleset}>{t("Videocall_title_2")}</Text>
                    </View>
                    <View>
                        <View style={VideocallStyles.twoimagewisth}>
                            <TouchableOpacity>
                                <Image style={VideocallStyles.imagsetstyle} resizeMode="cover" source={images.videocall_two_img} />
                            </TouchableOpacity>
                        </View>
                        {Muteicontwo === 0 ?
                            <TouchableOpacity onPress={() => SetMuteicontwo(1)} style={VideocallStyles.setmuteicon}>
                                <VectorIcons icon="FontAwesome" name='microphone' color={'white'} size={17} />
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => SetMuteicontwo(0)} style={VideocallStyles.setmuteicon}>
                                <VectorIcons icon="FontAwesome" name='microphone-slash' color={'white'} size={17} />
                            </TouchableOpacity>}
                        <Text style={VideocallStyles.nameVideocallStyleset}>{t("Videocall_title_3")}</Text>
                    </View>
                    <View>
                        <View style={VideocallStyles.twoimagewisth}>
                            <TouchableOpacity>
                                <Image style={VideocallStyles.imagsetstyle} resizeMode="cover" source={images.videocall_one_img} />
                            </TouchableOpacity>
                        </View>
                        {Muteiconsix === 0 ?
                            <TouchableOpacity onPress={() => SetMuteiconsix(1)} style={VideocallStyles.setmuteicon}>
                                <VectorIcons icon="FontAwesome" name='microphone-slash' color={'white'} size={17} />
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => SetMuteiconsix(0)} style={VideocallStyles.setmuteicon}>
                                <VectorIcons icon="FontAwesome" name='microphone' color={'white'} size={17} />
                            </TouchableOpacity>}
                        <Text style={VideocallStyles.nameVideocallStyleset}>{t("Videocall_title_4")}</Text>
                    </View>
                </View>
            </View>
            <View style={VideocallStyles.setspacediv}>
                <View style={VideocallStyles.setpaddingright}>
                    <View style={VideocallStyles.seticonview}>
                        <View>
                            <View style={VideocallStyles.seticonviewandtextwidthset}>
                                <TouchableOpacity style={VideocallStyles.microphone}>
                                    <VectorIcons icon="Entypo" name='plus' color={Colors.white_text_color} size={SF(22)} style={VideocallStyles.eyeiconset} />
                                </TouchableOpacity>
                                <Text style={VideocallStyles.bottomiconnamestyle}>{t("Videocall_title_5")}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={VideocallStyles.seticonviewandtextwidthset}>
                                {Cameras === 0 ?
                                    <TouchableOpacity onPress={() => SetCameras(1)} style={VideocallStyles.microphone}>
                                        <VectorIcons icon="FontAwesome" name={"microphone-slash"} color={Colors.white_text_color} size={SF(22)} style={VideocallStyles.eyeiconset} />
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => SetCameras(0)} style={VideocallStyles.microphone}>
                                        <VectorIcons icon="FontAwesome" name={"microphone"} color={Colors.white_text_color} size={SF(22)} style={VideocallStyles.eyeiconset} />
                                    </TouchableOpacity>}
                                <Text style={VideocallStyles.bottomiconnamestyle}>{t("Videocall_title_6")}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={VideocallStyles.seticonviewandtextwidthset}>
                                {Camera === 0 ?
                                    <TouchableOpacity onPress={() => SetCamera(1)} style={VideocallStyles.microphone}>
                                        <VectorIcons icon="Feather" name={"camera-off"} color={Colors.white_text_color} size={SF(22)} style={VideocallStyles.eyeiconset} />
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => SetCamera(0)} style={VideocallStyles.microphone}>
                                        <VectorIcons icon="Feather" name={"camera"} color={Colors.white_text_color} size={SF(22)} style={VideocallStyles.eyeiconset} />
                                    </TouchableOpacity>}
                                <Text style={VideocallStyles.bottomiconnamestyle}>{t("Videocall_title_7")}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={VideocallStyles.seticonviewandtextwidthset}>
                                <TouchableOpacity style={VideocallStyles.iconpositionset} onPress={() => navigation.navigate('EndCallScreen')}>
                                    <VectorIcons icon="Ionicons" name="call" color={Colors.white_text_color} size={SF(22)} style={VideocallStyles.eyeiconset} />
                                </TouchableOpacity>
                                <Text style={VideocallStyles.bottomiconnamestyle}>{t("Videocall_title_8")}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default VideoCall;