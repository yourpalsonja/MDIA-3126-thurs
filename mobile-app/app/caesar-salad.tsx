import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import "./../global.css";

export default function Page() {
    return (
        <View>
            <div className="flex-1 items-center justify-center bg-red">

                hey checking tailwind out
            </div>
            <Text>This is the caesar salad page 🧄🥬🐟🦨</Text>
            <Link href="/sandwich">Take me to the sandwich page, please</Link>
        </View>
    )
}
