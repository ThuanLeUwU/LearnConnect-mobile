import React, { useState } from "react";
import { Text, View, Image, ScrollView, Modal, KeyboardAvoidingView, TouchableOpacity, TextInput, } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Colorrdataset = () => {
	const { colorrdata } = useSelector(state => state.commonReducer) || {colorrdata};
	return colorrdata;
};
export default Colorrdataset;
