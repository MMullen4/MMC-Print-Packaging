import sendEmail from "../utils/mailer";

export const resolvers = {
  Query: {
    health: () => "MMC Print & Packaging Backend Running",
  },
  Mutation: {
    sendContactEmail: async (_: any, { name, email, message }: any) => {
      try {
        await sendEmail(name, email, message);
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },
  },
};
