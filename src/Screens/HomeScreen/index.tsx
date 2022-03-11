import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView, Alert } from "react-native";
import { SCREEN_HEIGHT } from "../../Helper/ScreenDimentions";
import styles from "./styles";
import firestore, { firebase } from '@react-native-firebase/firestore';
import { LogBox } from "react-native";
import RNRestart from 'react-native-restart';
const HomeScreen = () => {

    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState();
    const [isSelected, setIsSelected] = useState(null);
    const [word, setWord] = useState('____')
    const [answerView, setAnswerView] = useState(false);
    const [check, setCheck] = useState(false);
    const [answerBackgroundColor, setAnswerBackgroundColor] = useState('#fff')
    const [answerTextColor, setTextColor] = useState('#3b6c82')
    const [button, setButton] = useState('#fff')
    const [disable, setDisable] = useState(false);
    const [query, setQuery] = useState('');
    const [translation, setTranslation] = useState('');
    const [index, setIndex] = useState(0)
    const [arr, setArr] = useState([])
    const [option1, setOption1] = useState([])
    const [option2, setOption2] = useState([])
    const [option3, setOption3] = useState([])
    const [option4, setOption4] = useState([])
    const [option5, setOption5] = useState([])
    const [done, setDone] = useState(false)
    const [flatNumber, setFlatNumber] = useState(0)
    const [rightAnswer, setRightAnswer] = useState([])

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
        getData();
        goBack()
    }, [])

    const getData = async () => {
        try {
            var snapShot = await firebase.firestore()
                .collection('Questions')
                .get()
            snapShot.forEach((doc: any) => {
                console.log('Doc====>', doc)
                const value = doc._data.Sentences[index]
                const translation = doc._data.Translations[index]
                const arr = doc._data.Sentences.length
                setArr(arr)
                console.log('Trans', arr)
                setQuery(value);
                setTranslation(translation);
                setOption1(doc._data.Option1)
                setOption2(doc._data.Option2)
                setOption3(doc._data.Option3)
                setOption4(doc._data.Option4)
                setOption5(doc._data.Option5)
            })
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleWord = (id: any, word: any, answer: any) => {
        setShow(true)
        setIsSelected(id)
        setWord(word)
        setAnswer(answer)
        console.log('Answer===', answer)
    }

    const handleCheckAnswer = () => {
        setDisable(true)
        if (answer == true) {
            setAnswerView(true)

            setCheck(true)
            setAnswerBackgroundColor('#37e9e9')
            setTextColor('#fff')
            setButton('#6392a6')
        }
        else {
            setAnswerView(false)
            setCheck(true)
            setAnswerBackgroundColor('#ff8d8a')
            setTextColor('#fff')
            setButton('#6392a6')
        }
    }

    const goBack = () => {
        if (flatNumber < 5) {
            setFlatNumber(flatNumber + 1)
            setIndex(index + 1)
        }
        else {
            setDone(true)
        }
        setShow(false)
        setAnswerView(false)
        setCheck(false)
        setDisable(false)
        setAnswerBackgroundColor('#fff')
        setTextColor("#3b6c82")
        setButton('#fff')
        setIsSelected(null)
        setWord('____')
        getData();
    }

    const reTry = () => {
        RNRestart.Restart();
    }

    const renderItem = ({ item }: any) => {

        return (<>
            <View>
                {item.id == isSelected ?
                    <View style={[
                        styles.button,
                        { backgroundColor: '#6392a6' }]}>
                        <Text
                            style={{ color: '#6392a6' }}>
                            {item.op}
                        </Text>
                    </View>
                    :
                    <TouchableOpacity
                        disabled={disable}
                        onPress={() => {
                            handleWord(item.id, item.op, item.answer)
                        }}
                        style={[styles.button,
                        { backgroundColor: button }]}
                    >
                        <Text
                            style={styles.word}>
                            {item.op}
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </>
        )
    }
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.subContainer}>
                {
                    done == false ?
                        <View>
                            <Text style={styles.heading}>Fill in the missing word</Text>
                            <View style={styles.blankContainer}>
                                <Text style={[styles.text,]}>{query}</Text>
                            </View>

                            <View style={[styles.blankContainer, { marginTop: 35 }]}>
                                <Text style={styles.text1}>{translation.replace('____', `${word}`)}</Text>
                            </View>
                            <View style={{
                                marginTop: 35,
                                alignItems: 'center'
                            }}>
                                {flatNumber == 1 ?
                                    <FlatList
                                        numColumns={2}
                                        data={option1}
                                        renderItem={renderItem}
                                    />
                                    : null}
                                {flatNumber == 2 ?
                                    <FlatList
                                        numColumns={2}
                                        data={option2}
                                        renderItem={renderItem}
                                    />
                                    : null}
                                {flatNumber == 3 ?
                                    <FlatList
                                        numColumns={2}
                                        data={option3}
                                        renderItem={renderItem}
                                    />
                                    : null}
                                {flatNumber == 4 ?
                                    <FlatList
                                        numColumns={2}
                                        data={option4}
                                        renderItem={renderItem}
                                    />
                                    : null}
                                {flatNumber == 5 ?
                                    <FlatList
                                        numColumns={2}
                                        data={option5}
                                        renderItem={renderItem}
                                    />
                                    : null}
                            </View>
                            {
                                check == false ?
                                    <>
                                        {
                                            show == false ?
                                                <View style={{
                                                    marginTop: SCREEN_HEIGHT / 4,
                                                    paddingHorizontal: 20
                                                }}>
                                                    <TouchableOpacity style={styles.buttonContainer}>
                                                        <Text style={styles.buttonText}>CONTINUE</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                :
                                                <View style={{
                                                    marginTop: SCREEN_HEIGHT / 5,
                                                    paddingHorizontal: 20
                                                }}>
                                                    <TouchableOpacity onPress={() => handleCheckAnswer()}
                                                        style={styles.buttonContainer1}>
                                                        <Text style={styles.buttonText}>CHECK ANSWER</Text>
                                                    </TouchableOpacity>
                                                </View>
                                        }
                                    </>
                                    :
                                    <>
                                        {
                                            answerView == true ?
                                                <View style={styles.subContainer1}>
                                                    <View style={styles.bottoContainer}>
                                                        <Text style={[styles.buttonText,
                                                        {
                                                            marginVertical: 15,
                                                            fontWeight: 'bold'
                                                        }]}>Great Job!</Text>
                                                        <Image source={require('../../Assets/icon/flag.png')}
                                                            style={styles.icon}
                                                        />
                                                    </View>

                                                    <View>
                                                        <TouchableOpacity onPress={() => goBack()}
                                                            style={styles.buttonContainer2}>
                                                            <Text style={styles.buttonText1}>CONTINUE</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                :
                                                <View style={styles.subContainer2}>
                                                    <View style={styles.bottoContainer}>
                                                        <Text style={[
                                                            styles.buttonText,
                                                            {
                                                                marginVertical: 15,
                                                                fontWeight: 'bold'
                                                            }]}>Answer: <Text style={{ fontWeight: 'normal' }}>{rightAnswer[index]}</Text>
                                                        </Text>
                                                        <Image source={require('../../Assets/icon/flag.png')}
                                                            style={styles.icon}
                                                        />
                                                    </View>
                                                    <View>
                                                        <TouchableOpacity onPress={() => goBack()}
                                                            style={styles.buttonContainer2}>
                                                            <Text style={styles.buttonText2}>CONTINUE</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                        }
                                    </>
                            }
                            <View>
                            </View>
                        </View>
                        :
                        <View style={styles.bottomContainer}>
                            <View style={styles.bottomContainer1}>
                                <Image source={require('../../Assets/icon/thumbs-up.png')} style={styles.thumb} />
                                <Text style={styles.done}>Well Done!</Text>
                            </View>
                            <TouchableOpacity onPress={() => reTry()}>
                                <Image source={require('../../Assets/icon/reload.png')} style={styles.reload} />
                                <Text style={styles.reTry}>Retry</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </ScrollView>
    )
}
export default HomeScreen;
