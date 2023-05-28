import CustomColor from './Colors';

export default globalStyles = {
    container: {
        shadowColor: '#000',
        elevation: 10,
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: CustomColor.lightGrey,
        borderRadius: 5,
        padding: 10,
    },
    contentContainer: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    smallTitle: {
        marginTop: 10,
        fontSize: 20,
        color: CustomColor.darkGrey,
    },
    mediumTitle: {
        marginTop: 10,
        fontSize: 24,
        color: CustomColor.darkGrey,
    },
    paragraphText: {
        fontSize: 15,
        lineHeight: 25,
    },
    checkText: {
        fontSize: 18,
        color: '#3b3b3b',
        marginHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: CustomColor.accentPurple,
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 3,
    },
};
