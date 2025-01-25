const getUrl = (rel) => {
  const base = import.meta.env.MODE === "development" ? "http://localhost:3000/" : "/";
  return base + rel;
};

const fetch2 = async (resource, method, body) => {
  try {
    const response = await fetch(getUrl(resource), {
      method,
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    return {
      ok: response.ok,
      ...data,
    };
  } catch (err) {
    return {
      ok: false,
      message: err.stack,
    };
  }
};

export default {
  auth: {
    signUp: async (first_name, last_name, email, password) => await fetch2("auth/sign-up", "POST", { first_name, last_name, email, password }),
    signIn: async (email, password) => await fetch2("auth/sign-in", "POST", { email, password }),
    isAuth: async () => await fetch2("auth/is-auth", "GET"),
    signOut: async () => await fetch2("auth/sign-out", "POST"),
  },
  user: {
    update: async (opts) => await fetch2("user/update", "POST", opts),
    getAll: async () => await fetch2("user/users", "GET"),
    add: async (id) => await fetch2(`user/add/${id}`, "POST"),
  },
  message: {
    getAll: async () => await fetch2("message/messages", "GET"),
    send: async (recipientId, message) => await fetch2(`message/send/${recipientId}`, "POST", { message }),
    get: async (recipientId) => await fetch2(`message/messages/${recipientId}`, "GET"),
  },
  getUrl,
};
