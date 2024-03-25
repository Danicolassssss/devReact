import  {TouchableOpacity, Text, View} from 'react-native'; 
import { useState } from 'react';
import { ScoreDisplay } from './ScoreDisplay';

export function ScoreCounter(){
    const [score, setScore] = useState(0);
    function increment(){
        setScore(score+1);
    }
    return <View>
        <TouchableOpacity onPress={increment}>
            <Text>Increment</Text>
        </TouchableOpacity>

        <ScoreDisplay score={score}></ScoreDisplay>
    </View>
}