import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IcAddPhoto, IcRemovePhoto, ILPhotoEmpty} from '../../assets';
import {colors, fonts, getData} from '../../utils';
import {Button, Gap} from '../../components';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {uploadPhotoAction} from '../../redux/action/auth';
import {useDispatch} from 'react-redux';

const SignUpPhoto = () => {
  const [profile, setProfile] = useState({});
  const [photo, setPhoto] = useState(ILPhotoEmpty);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoData, setPhotoData] = useState({
    name: '',
    type: '',
    uri: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getData('profile').then(res => {
      setProfile(res);
    });
  }, []);

  const launchGallery = () => {
    launchImageLibrary(
      {
        maxHeight: 100,
        maxWidth: 100,
        quality: 0.1,
      },
      callback => {
        if (!callback.didCancel) {
          console.log('get photo', callback);
          setPhoto({uri: callback.assets[0].uri});
          setHasPhoto(true);
          setPhotoData({
            name: callback.assets[0].fileName,
            type: callback.assets[0].type,
            uri: callback.assets[0].uri,
          });
        }
      },
    );
  };

  const removePhoto = () => {
    setPhoto(ILPhotoEmpty);
    setHasPhoto(false);
  };

  const onSubmit = () => {
    dispatch(uploadPhotoAction(photoData));
  };

  return (
    <View style={styles.page}>
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <Image source={photo} style={styles.avatar} />
          <View style={styles.actionButton}>
            {hasPhoto ? (
              <TouchableOpacity onPress={removePhoto}>
                <IcRemovePhoto />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={launchGallery}>
                <IcAddPhoto />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text style={styles.title}>{profile.name}</Text>
        <Text style={styles.subTitle}>{profile.email}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button text="Upload and Continue" onPress={onSubmit} />
        <Gap height={30} />
        <Button isLink text="Skip for this" />
      </View>
    </View>
  );
};

export default SignUpPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 64,
    paddingHorizontal: 40,
  },
  contentWrapper: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130,
    borderColor: colors.gray1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110,
  },
  actionButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  title: {
    marginTop: 26,
    fontSize: 24,
    fontFamily: fonts.medium,
    color: colors.text.black,
  },
  subTitle: {
    marginTop: 4,
    fontSize: 18,
    fontFamily: fonts.regular,
    color: colors.text.gray,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});
