# riao-sample-server - Readme

## Development

Run a dev test with `npm start`.

Here's a rundown of where to put your code, see each file for more information:

- **src/environment.ts**: Setup environment variables here
- **src/index.ts**: You don't typically need to edit this file, it just initializes and starts your app.
- **src/log.ts**: This is your project's log, import this file to use the log. You can also extend/replace the log.
- **src/main.ts**: This is the main entrypoint for your application, after services have been registered.
- **src/register.ts**: This file initializes services such as database, SMTP, etc. that are used across different entrypoints of your application.

## Running Tests

To run unit tests, `npm run test`

## Scripts

You can write custom scripts in the `script/` directory. See `script/example.ts` as an example.

Run your script with `npm run script -- example`

## Compiling

### Debug Builds

To compile a debug build, run `npm run build`. The build output will appear in the `./dist` folder.

### Prod Builds

To compile a production build, run `npm run lint:prod && npm run build`. The build output will appear in the `./dist` folder.

## More

### Generating Docs

`npm run doc` and browse docs/index.html!


### Environment Variables

See `src/environment.ts` to see how to use this project's environment variables. Configure an environment in `.env` or with `process.env` (https://nodejs.org/dist/latest-v16.x/docs/api/process.html#processenv).
