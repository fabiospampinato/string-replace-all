/* IMPORT */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/* STRING REPLACE ALL */
function stringReplaceAll(str, find, replacement) {
    return str.replace(new RegExp(_.escapeRegExp(find), 'g'), replacement);
}
/* EXPORT */
exports.default = stringReplaceAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsWUFBWTs7O0FBRVosMEJBQTRCO0FBRTVCLHdCQUF3QjtBQUV4QiwwQkFBNEIsR0FBVyxFQUFFLElBQVksRUFBRSxXQUFtQjtJQUV4RSxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBRyxJQUFJLE1BQU0sQ0FBRyxDQUFDLENBQUMsWUFBWSxDQUFHLElBQUksQ0FBRSxFQUFFLEdBQUcsQ0FBRSxFQUFFLFdBQVcsQ0FBRSxDQUFDO0FBRWxGLENBQUM7QUFFRCxZQUFZO0FBRVosa0JBQWUsZ0JBQWdCLENBQUMifQ==