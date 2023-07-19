export const useNavbar = () => {
    const menus = [
        {
            title: "Home",
            value: "home",
        },
        {
            title: "Get Pet",
            value: "get-pet",
        },
        {
            title: "Open Adopt",
            value: "open-adopt",
        },
        {
            title: "About Us",
            value: "about-us",
        },
    ];

    return { menus };
}