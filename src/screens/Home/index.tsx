import { useState, useEffect } from "react";
import { Text, View, FlatList, TextInput, Alert, TouchableOpacity, Keyboard } from 'react-native';

import { Logocontainer } from '../../components/Logocontainer';
import { Card } from '../../components/card';
import { Divider } from '../../components/divider';

import theme from '../../theme/index';
import { styles } from "./style";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

import { database } from "../../database";
import { TasksModel } from "../../database/model/tasksModel";
import { Q } from "@nozbe/watermelondb";

// import { MMKV, useMMKVObject } from "react-native-mmkv";
// const storage = new MMKV({ id: 'mytasks' });

type typeTasks = {
    id: number,
    isChecked: Boolean,
    name: string,
}

export function Home() {

    const [tasks, setTasks] = useState<TasksModel[]>([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [concluidas, setConcluidas] = useState(0);
    const [criadas, setCriadas] = useState(0);
    const [afazer, setAfazer] = useState(0);


    async function fetchTasks() {
        const tasksCollection = database.get<TasksModel>('tasks');
        const allTasks = await tasksCollection.query().fetch();
        setTasks(allTasks);
        setCriadas(allTasks.length)

        const concluidas = await tasksCollection.query(Q.where('isChecked', true)).fetch();
        setConcluidas(concluidas.length)
        const afazer = await tasksCollection.query(Q.where('isChecked', false)).fetch();
        setAfazer(afazer.length)
    }

    async function addTask() {
        if (newTaskName != '') {

            await database.write(async () => {
                await database.get<TasksModel>('tasks').create(data => {
                    data.name = newTaskName, data.isChecked = false
                })
            })

            setNewTaskName('')
            Keyboard.dismiss();
            fetchTasks();

        } else {
            Alert.alert('Preencha o campo para adicionar a tarefa!')
        }
    };

    async function removeTask(item: TasksModel) {

        await database.write(async () => {
            await item.destroyPermanently();
        })

        fetchTasks();
    }

    async function check(item: TasksModel) {
        if (item.isChecked == true) {
            await database.write(async () => {
                await item.update(data => {
                    data.isChecked = false
                })
            })

        } else {
            await database.write(async () => {
                await item.update(data => {
                    data.isChecked = true
                })
            })
        }

        fetchTasks();
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    return (
        <View style={{ backgroundColor: theme.COLORS.GRAY_600 }}>
            <Logocontainer />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma Tarefa'
                    onChangeText={setNewTaskName}
                    placeholderTextColor={theme.COLORS.GRAY_200}
                    value={newTaskName}
                />
                <TouchableOpacity style={styles.button}
                    onPress={addTask}>
                    <AntDesign name="pluscircleo" size={18} color={theme.COLORS.GRAY_100} />

                </TouchableOpacity>
            </View>

            <View style={styles.containertexts}>
                <View style={styles.containertexts}>
                    <Text style={styles.titlecriadas}>Criadas</Text>
                    <Text style={styles.numbers}>{criadas}</Text>
                </View>
                <View style={styles.containertexts}>
                    <Text style={styles.titleconcluidas}>Concluídas</Text>
                    <Text style={styles.numbers}>{concluidas}</Text>
                </View>

            </View>

            <Divider />

            {/* <Card id={1} isChecked={false} taskName='task' onRemove={removeTask} onChecked={check} /> */}
            <FlatList
                style={{
                    minHeight: 300,
                    maxHeight: 500,
                    marginBottom: 20

                }}
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<Card isChecked={item.isChecked} taskName={item.name} onRemove={() => removeTask(item)} onCheck={() => check(item)} />)}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmpty}>
                        <FontAwesome5 style={{ marginBottom: 5 }} name="clipboard-list" size={35} color="white" />

                        <Text style={styles.listEmptyTextBold}>
                            Você ainda não tem tarefas cadastradas!
                        </Text>

                        <Text style={styles.listEmptyText}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}

            />

        </View>
    )
}