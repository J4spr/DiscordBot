import {CommandInteraction, SlashCommandBuilder} from "discord.js";


export const data = new SlashCommandBuilder()
    .setName("play")
    .setDescription("Plays a youtube video(audio only)");

export async function execute(interaction: CommandInteraction) {
    await interaction.reply("Ayoo dit werkt!");
}

