// "use server";

// import { PrismaClient } from "@repo/db/src/index";
// // import { currentUser } from "@clerk/nextjs";
// import axios from "axios";
// const client = new PrismaClient();

// export const onDiscordConnect = async (
//   channel_id: string,
//   webhook_id: string,
//   webhook_name: string,
//   webhook_url: string,
//   id: string,
//   guild_name: string,
//   guild_id: string
// ) => {
//   //check if webhook id params set
//   if (webhook_id) {
//     //check if webhook exists in database with userid
//     const webhook = await client.discordWebhook.findFirst({
//       where: {
//         userId: parseInt(id),
//       },
//       include: {
//         connections: {
//           select: {
//             type: true,
//           },
//         },
//       },
//     });

//     //if webhook does not exist for this user
//     if (!webhook) {
//       //create new webhook
//       await client.discordWebhook.create({
//         data: {
//           userId: parseInt(id),
//           webhookId: webhook_id,
//           channelId: channel_id!,
//           guildId: guild_id!,
//           name: webhook_name!,
//           url: webhook_url!,
//           guildName: guild_name!,
//           connections: {
//             create: {
//               userId: parseInt(id),
//               type: "Discord",
//             },
//           },
//         },
//       });
//     }

//     //if webhook exists return check for duplicate
//     if (webhook) {
//       //check if webhook exists for target channel id
//       const webhook_channel = await 
//       client.discordWebhook.findUnique({
//         where: {
//           channelId: channel_id,
//         },
//         include: {
//           connections: {
//             select: {
//               type: true,
//             },
//           },
//         },
//       });

//       //if no webhook for channel create new webhook
//       if (!webhook_channel) {
//         await client.discordWebhook.create({
//           data: {
//             userId: parseInt(id),
//             webhookId: webhook_id,
//             channelId: channel_id!,
//             guildId: guild_id!,
//             name: webhook_name!,
//             url: webhook_url!,
//             guildName: guild_name!,
//             connections: {
//               create: {
//                 userId: parseInt(id),
//                 type: "Discord",
//               },
//             },
//           },
//         });
//       }
//     }
//   }
// };

// export const getDiscordConnectionUrl = async () => {
//   const user = await currentUser();
//   if (user) {
//     const webhook = await 
//     client.discordWebhook.findFirst({
//       where: {
//         userId: user.id,
//       },
//       select: {
//         url: true,
//         name: true,
//         guildName: true,
//       },
//     });

//     return webhook;
//   }
// };

// export const postContentToWebHook = async (content: string, url: string) => {
//   console.log(content);
//   if (content != "") {
//     const posted = await axios.post(url, { content });
//     if (posted) {
//       return { message: "success" };
//     }
//     return { message: "failed request" };
//   }
//   return { message: "String empty" };
// };
