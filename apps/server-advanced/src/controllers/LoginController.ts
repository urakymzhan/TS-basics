import { Request, Response } from "express";
import { bodyValidator, controller, get, post } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
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
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
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
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    // only possoble because of cookieSession
    req.session = undefined;
    res.redirect("/");
  }
}
