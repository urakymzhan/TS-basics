import { NextFunction, Request, Response, Router } from "express";
const router = Router();

// we overwrite Request, reason is body inside type definition file is not correctly defined. Ex: body: any
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

// middleware
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    // return nothing
    return;
  }
  res.status(403);
  res.send("Not permitted!");
}

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "hi@hi.com" && password === "password") {
    // mark this person as logged in
    // only possoble because of cookieSession
    req.session = { loggedIn: true };
    res.redirect("/");
    res.send(email?.toUpperCase());
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <div>You are logged in</div>
      <a href="/logout">Logout</a>
    </div>
  `);
  } else {
    res.send(`
    <div>
      <div>You are not logged in</div>
      <a href="/login">Login</a>
    </div>
  `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  // only possoble because of cookieSession
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user!");
});
export { router };
