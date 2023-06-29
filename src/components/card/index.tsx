import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from "./style";

// import { useState } from "react";
import theme from '../../theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TasksModel } from 'src/database/model/tasksModel';

type typeCard = {
    id: number,
    isChecked: Boolean,
    taskName: string,
    onRemove(): (item: TasksModel) => void,
    onCheck(): (item: TasksModel) => void,
}

export function Card({ isChecked, taskName, onRemove, onCheck }: typeCard) {
    // const [text, setText] = useState('Useless Text');
    // console.log(isChecked);
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.container}>
                <View>
                    {isChecked ?
                        <TouchableOpacity
                            onPress={onCheck}>
                            <AntDesign name="checkcircle" size={21} color={theme.COLORS.PURPLE_DARK} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={onCheck}>
                            <Entypo name="circle" size={21} color={theme.COLORS.BLUE} />
                        </TouchableOpacity>
                    }
                </View>
                <Text style={styles.text}> {taskName} </Text>
                <TouchableOpacity
                    onPress={onRemove}>
                    <Ionicons name="trash" size={21} color="white" />
                </TouchableOpacity>
            </View>


        </View>
    )
}