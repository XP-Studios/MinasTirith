

const getEmbed = (character) => {
    
    return new Discord.MessageEmbed()
       .setColor(character.color)
       .setTitle(character.name)
       .setURL('https://heights.edu/student-life/clans/')
       .setAuthor('LOTR Character', 'https://pbs.twimg.com/profile_images/563033330325524480/uevFE3pg_400x400.png', 'https://discord.js.org')
       .setDescription('**Clan Info**')
       .setThumbnail('https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-1/p720x720/14257554_1236208096409455_6398124545764156141_o.png?_nc_cat=106&_nc_sid=dbb9e7&_nc_ohc=0BX7_5HF5msAX9zKM2Q&_nc_ht=scontent-iad3-1.xx&oh=7bdd4ae30e2274c029c8c238b60c26e8&oe=5F6D6F71')
       .addFields(
           { name: 'title', value: character.title, inline: true },
       )
       .setImage(clan.img)
       .setTimestamp()
       .setFooter('Heights Clan', 'https://pbs.twimg.com/profile_images/563033330325524480/uevFE3pg_400x400.png');

}
module.exports = {getEmbed}