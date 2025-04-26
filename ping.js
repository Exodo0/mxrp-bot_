const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const os = require('os');
const process = require('process');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('📈Tu BOT'),
    async execute(interaction) {
        const cpuModel = os.cpus()[0].model;
        const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
        const usedMem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const uptime = process.uptime().toFixed(0);

        const embed = new EmbedBuilder()
            .setColor('#ff4d4d')
            .setTitle('BOT STATUS')
            .setDescription(
                `🔨 Ping: ${interaction.client.ws.ping}ms\n` +
                `🔨 Node.js: ${process.version}\n` +
                `🔨 CPU: ${cpuModel}\n` +
                `🔨 RAM: ${usedMem} MB / ${totalMem} MB\n` +
                `🔨 Uptime: ${uptime}s`
            )
            .setFooter({ text: 'MXRP DV 🔗' });

        await interaction.reply({ embeds: [embed] });
    }
};