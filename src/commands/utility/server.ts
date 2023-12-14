import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('provides info about the server.'),
    async execute(interaction: any){
        await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`)
    },
};