// import mysql from 'mysql';
// import { Connection } from 'mysql';
//
// async function createConnection(): Promise<Connection | boolean> {
//   return await new Promise<Connection | boolean>((resolve, reject) => {
//     try {
//       var connection: Connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: `crm`
//       });
//
//       connection.connect(function (err: Error | null) {
//         if (err) {
//           console.log("Error connecting to database", err);
//           resolve(false);
//         } else {
//           console.log("Database Connected");
//           resolve(connection);
//         }
//       });
//     } catch (err) {
//       console.log("Something error", err);
//       resolve(false);
//     }
//   });
// }
//
// export { createConnection };