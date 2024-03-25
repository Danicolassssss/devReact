import { Text , Image} from "react-native";

export function User({firstname,lastname,age,isVerified,adress,children,doSomething}){
    doSomething();
    return <>
        {children}
        <Text>First Name: {firstname}</Text>
        <Text>Last Name: {lastname}</Text>
        <Text>Age: {age}</Text>
        <Text>Is Verified: {isVerified ? "Yes" : "No"}</Text>
        <Text>Adress: {adress.street} qui est situé a {adress.city}</Text>
    </>
}