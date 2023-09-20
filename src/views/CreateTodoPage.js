import React, { useState } from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constants/Screens';
import styles from '../styles/CreateTodoPageStyles';
import isEmpty from '../utils/isEmpty';
import { useDispatch } from 'react-redux';
import TodoActions from '../actions/todo';
import DatePicker from 'react-native-date-picker';
import DateUtils from '../utils/date'

const CreateTodoPage = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);


    const onCancel = () => {
        navigation.pop();
    };

    const onTodayPress = () => {
        setDate(new Date(Date.now()));
    }

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

    const openDatePicker = () => {
        setShowDatePicker(true);
    }

    const closeDatePicker = () => {
        setShowDatePicker(false);
    } 

    const onConfirmDate = (date) => {
        setDate(date);
        setShowDatePicker(false);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.row}>
                <Pressable style={styles.todayCta} onPress={onTodayPress}>
                    <Text style={styles.text}>Today</Text>
                </Pressable>
                <Pressable style={styles.chooseDateCta} onPress={openDatePicker}>
                    <Text style={styles.text}>Choose Date</Text>
                </Pressable>
            </View>
            <View style={styles.dateDayContainer} >
            <Text style={styles.date}>{DateUtils.getDay?.(date?.getDay?.())} </Text>
            <Text style={styles.day}>{date?.getDate?.()}/{date?.getMonth?.()}/{date?.getFullYear?.()}</Text>
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
            <DatePicker
                open={showDatePicker}
                modal
                onConfirm={onConfirmDate}
                onCancel={closeDatePicker}
                mode="date"
                title={'Choose a date'}
                date={date}
                locale="en"
                minimumDate={new Date(Date.now())}
                textColor='blue'
                style={{ height: 150, width: 150, borderRadius: 10, borderColor: 'blue', borderWidth: 4 }}
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