import { Configuration, OpenAIApi } from "openai";
<<<<<<< HEAD
import * as agents from "@/agents"
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const agent = body.agent || "customerSupportAgent"
=======
import * as agents from "@/agents";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const agent = body.agent || "customerSupportAgent";
>>>>>>> 357393524c2e0b25ead22831a4eee23cb79d4668

  if (!Object.keys(agents).includes(agent)) {
    throw new Error(`${agent} doesn't exist`);
  }

  const { OPENAI_API_KEY } = useRuntimeConfig();

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: body.messages || [],
    temperature: body.temperature || 1,
<<<<<<< HEAD
    //@ts-expect-error checking above if the agent exists
    ...agents[agent](body),
  });
  return completion.data;
});
=======
    // @ts-expect-error checking above if the agent exists
    ...agents[agent](body),
  });
  return completion.data;
});
>>>>>>> 357393524c2e0b25ead22831a4eee23cb79d4668
