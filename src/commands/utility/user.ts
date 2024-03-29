
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user."),
  async execute(interaction: any ) {
    await interaction.reply(
      `This command is run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    );
  },
};