// screens/NotesScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { database } from '../database/database';
import Note from '../database/model/Note';


const NotesScreen = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const notesCollection = database.get<Note>('notes');
            const allNotes = await notesCollection.query().fetch();
            setNotes(allNotes.slice(0, 2)); // 只取前2個數據
        };

        fetchNotes();
    }, []);




    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Note 1: {notes[0]?.title} - {notes[0]?.content}</Text>
            <Text style={{ color: 'white' }}>Note 2: {notes[1]?.title} - {notes[1]?.content}</Text>
        </View>
    );
};

export default NotesScreen;
