// "use server";
// import { Option } from "@/components/ui/multiple-selector";
// import useUser from "@/components/hooks/useUser";
// import useZap from "@/components/hooks/useZap";
// import { PrismaClient} from "@repo/db/src/index";
// const client = new PrismaClient();
// // eslint-disable-next-line react-hooks/rules-of-hooks
// const { user } = useUser();
// // eslint-disable-next-line react-hooks/rules-of-hooks
// const { zaps } = useZap(); 


// export const getGoogleListener = async () => {
//   if (user) {
//     const listener = await client.user.findUnique({
//       where: {
//         email: user.email,
//       },
//       select: {
//         googleResourceId: true,
//       },
//     });

//     if (listener) return listener;
//   }
// };

// export const onFlowPublish = async (workflowId: string, state: boolean) => {
//   console.log(state);
//   const published = await client.zap.update({
//     where: {
//       id: workflowId,
//     },
//     data: {
//       publish: state,
//     },
//   });

//   if (published.publish) return "Workflow published";
//   return "Workflow unpublished";
// };

// export const onCreateNodeTemplate = async (
//   content: string,
//   type: string,
//   workflowId: string,
//   channels?: Option[],
//   accessToken?: string,
//   notionDbId?: string
// ) => {
//   if (type === "Discord") {
//     const response = await client.zap.update({
//       where: {
//         id: workflowId,
//       },
//       data: {
//         discordTemplate: content,
//       },
//     });

//     if (response) {
//       return "Discord template saved";
//     }
//   }
//   if (type === "Slack") {
//     const response = await client.zap.update({
//       where: {
//         id: workflowId,
//       },
//       data: {
//         slackTemplate: content,
//         slackAccessToken: accessToken,
//       },
//     });

//     if (response) {
//       const channelList = await client.zap.findUnique({
//         where: {
//           id: workflowId,
//         },
//         select: {
//           slackChannels: true,
//         },
//       });

//       if (channelList) {
//         //remove duplicates before insert
//         const NonDuplicated = channelList.slackChannels.filter(
//           (channel) => channel !== channels![0].value
//         );

//         NonDuplicated!
//           .map((channel) => channel)
//           .forEach(async (channel) => {
//             await client.zap.update({
//               where: {
//                 id: workflowId,
//               },
//               data: {
//                 slackChannels: {
//                   push: channel,
//                 },
//               },
//             });
//           });

//         return "Slack template saved";
//       }
//       channels!
//         .map((channel) => channel.value)
//         .forEach(async (channel) => {
//           await client.zap.update({
//             where: {
//               id: workflowId,
//             },
//             data: {
//               slackChannels: {
//                 push: channel,
//               },
//             },
//           });
//         });
//       return "Slack template saved";
//     }
//   }

//   if (type === "Notion") {
//     const response = await client.zap.update({
//       where: {
//         id: workflowId,
//       },
//       data: {
//         notionTemplate: content,
//         notionAccessToken: accessToken,
//         notionDbId: notionDbId,
//       },
//     });

//     if (response) return "Notion template saved";
//   }
// };

// export const onGetWorkflows = async () => {
//   if (user) {
//     const workflow = await client.zap.findMany({
//       where: {
//         userId: user.id,
//       },
//     });

//     if (workflow) return workflow;
//   }
// };

// // export const onCreateWorkflow = async (name: string, description: string) => {
// //   if (user) {
// //     try {
// //       const workflow = await client.zap.create({
// //         data: {
// //           userId: user.id.toString(), 
// //           name,
// //           description,
// //         },
// //       });

// //       return { message: 'workflow created' };
// //     } catch (error) {
// //       console.error('Error creating workflow:', error);
// //       return { message: 'Oops! try again' };
// //     }
// //   } else {
// //     return { message: 'User not found' };
// //   }
// // };
// export const onGetNodesEdges = async (flowId: string) => {
//   const nodesEdges = await client.zap.findUnique({
//     where: {
//       id: flowId,
//     },
//     select: {
//       nodes: true,
//       edges: true,
//     },
//   });
//   if (nodesEdges?.nodes && nodesEdges?.edges) return nodesEdges;
// };
// function useZaps(): { zaps: any } {
//   throw new Error("Function not implemented.");
// }
