function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export const formatName = (name, limit = null) => {
    const words = name.split(' ')
    const capitalizedWords = words.map((word, index) => {
        if (index > 1) {
            return word.charAt(0).toUpperCase() + '.'
        }
        return capitalizeFirstLetter(word)
    })
    if (limit) {
        return capitalizedWords.slice(0, limit).join(' ')

    }
    else {
        return capitalizedWords.join(' ')
    }
}

export const pathImageFighter = (fighter, team, weight) => {
    const weightCategory = weight.replace(" - ", "").replace(" kg", "").replace("kg", "");

    const fighterName = fighter
        .replace('.', "")
        .split(' ')
        .slice(0, 2)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('_');

    return `${weightCategory}/${fighterName}_${team}.png`;
};
