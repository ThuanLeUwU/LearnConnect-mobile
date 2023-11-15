import React, { useState, useRef } from 'react';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const VideoPlayer = (props) => {
    const {sourceUrl} = props;
    const videoPlayer = useRef(null);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);

    const [currentTime, setCurrentTime] = useState(0);
    const [maxTime, setMaxTime] = useState(0);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
    const [isLoading, setIsLoading] = useState(true);

    const onSeek = (seek) => {
        if (seek <= maxTime) {
            videoPlayer?.current.seek(seek);
        }
        console.log('seek: ',seek);
        console.log('current: ',currentTime);
        console.log('max: ',maxTime);
    };
    const onSeeking = (currentVideoTime) => {
        if (currentVideoTime > maxTime) {
            return false;
        }
        setCurrentTime(currentVideoTime);
        return true;
    }
    const onPaused = (newState) => {
        setPaused(!paused);
        setPlayerState(newState);
        console.log(screenHeight, Platform.OS);
    };
    const onReplay = () => {
        videoPlayer?.current.seek(0);
        setCurrentTime(0);
        if (Platform.OS === 'android') {
            setPlayerState(PLAYER_STATES.PAUSED);
            setPaused(true);
        } else {
            setPlayerState(PLAYER_STATES.PLAYING);
            setPaused(false);
        }
    };
    const onProgress = (data) => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
            if(data.currentTime > maxTime) {
                setMaxTime(data.currentTime);
            }
        }
    };
    const onLoad = (data) => {
        setDuration(Math.round(data.duration));
        setIsLoading(false);
    };

    const onLoadStart = () => setIsLoading(true);
    const onEnd = () => {
        setPlayerState(PLAYER_STATES.ENDED);
        setCurrentTime(duration);
    };
    const [isFullScreen, setIsFullScreen] = useState(false);
    const onFullScreen = () => {
        if (!isFullScreen) {
            Orientation.lockToLandscape();
        } else {
            if (Platform.OS === 'ios') {
                Orientation.unlockAllOrientations();
            }
            Orientation.unlockAllOrientations();
        }
        setIsFullScreen(!isFullScreen);
    };
    return (
        <View style={{ marginHorizontal: isFullScreen ? 0 : 0 }}>
            <Video
                onEnd={onEnd}
                onLoad={onLoad}
                onLoadStart={onLoadStart}
                posterResizeMode={'cover'}
                onProgress={onProgress}
                paused={paused}
                ref={(ref) => (videoPlayer.current = ref)}
                resizeMode='cover'
                source={{
                    uri: sourceUrl,
                  }}
                style={styles.backgroundVideo}
            />
            <MediaControls
                isFullScreen={isFullScreen}
                duration={duration}
                isLoading={isLoading}
                progress={currentTime}
                onFullScreen={onFullScreen}
                onPaused={onPaused}
                onReplay={onReplay}
                onSeek={onSeek}
                onSeeking={onSeeking}
                mainColor={'red'}
                playerState={playerState}
                style={isFullScreen ? styles.backgroundVideoFullScreen : styles.backgroundVideo}
                sliderStyle={isFullScreen ? { containerStyle: styles.mediaControls, thumbStyle: {}, trackStyle: {} } : { containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        height: 200,
        width: '100%',  
        backgroundColor:'rgba(223,238,255,1)'
    },
    mediaControls: {
        width: '80%',
        height: '100%',
        flex: 1,
        alignSelf: 'center',
    },
    backgroundVideoFullScreen: {
        height: screenWidth,
        width: screenHeight*0.5
    },
});

export default VideoPlayer;