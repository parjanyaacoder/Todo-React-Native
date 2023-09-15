import React, { useState } from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';
import styles from '../styles/CreateTodoPageStyles';
import isEmpty from '../utils/isEmpty';
import { useDispatch } from 'react-redux';
import TodoActions from '../actions/todo';

const CreateTodoPage = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const onCancel = () => {
        navigation.pop();
    };

    const onSubmit = () => {
        const payload = {
            title: title,
            description: description,
            date: Date.now(),
            cb: (err, data) => {
                if (err) {
                    
                } else {
                    navigation.pop();
                }
            }
        }
        if (!isEmpty(title) &&!isEmpty(description)) {
            dispatch(TodoActions.createTodo(payload));
        }
    };

    const onFabPress = () => {}

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.row}>
                <Pressable style={styles.todayCta} onPress={() => { }}>
                    <Text style={styles.text}>Today</Text>
                </Pressable>
                <Pressable style={styles.chooseDateCta} onPress={() => { }}>
                    <Text style={styles.text}>Choose Date</Text>
                </Pressable>
            </View>
            <View style={styles.dateDayContainer} >
            <Text style={styles.date}>Monday </Text>
            <Text style={styles.day}>12/09/2023</Text>
            </View>
            <TextInput style={styles.titleInput}
                onSubmitEditing={() => { }}
                placeholder='Title'
                placeholderTextColor={'blue'}
                autoFocus={true}
                onChangeText={title => setTitle(title)}
                value={title}
            />
            <TextInput style={styles.descriptionInput}
                onSubmitEditing={() => { }}
                placeholder='Description'
                placeholderTextColor={'blue'}
                onChangeText={description => setDescription(description)}
                value={description}
            />

            <View style={styles.ctaRow}>
                <Pressable style={styles.cancelCta} onPress={onCancel}>
                    <Text style={styles.text}>Cancel</Text>
                </Pressable>
                <Pressable style={styles.submitCta} onPress={onSubmit}>
                    <Text style={styles.text}>Submit</Text>
                </Pressable>
            </View>
            <TouchableOpacity onPress={onFabPress} style={styles.fabBtn} >
      <View >
      <Text style={styles.addIcon} >
        {'+'}
      </Text>
      </View>
    </TouchableOpacity>
        </ScrollView>
    );
};

export default CreateTodoPage;