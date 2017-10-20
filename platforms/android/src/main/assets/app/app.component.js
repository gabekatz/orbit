"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_services_1 = require("./services/auth.services");
var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent.prototype.checkAuth = function () {
        // firebase.login({
        //   type: firebase.LoginType.FACEBOOK,
        //   // Optional
        //   facebookOptions: {
        //     // defaults to ['public_profile', 'email']
        //     scope: ['public_profile', 'email']
        //   }
        // }).then(
        //     function (result) {
        //       JSON.stringify(result);
        //     },
        //     function (errorMessage) {
        //       console.log(errorMessage);
        //     }
        // );
        // this.authService.facebookLogin()
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        moduleId: module.id,
        template: "    <StackLayout>\n  <TextField hint=\"Email Address\" keyboardType=\"email\"\n    autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n  <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n  <Button text=\"Sign in\" (tap)=\"checkAuth()\"></Button>\n  <Button text=\"Sign up for Groceries\"></Button>\n</StackLayout>",
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [auth_services_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMERBQXVEO0FBZXZELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFNUMsVUFBSyxHQUFHLEtBQUssQ0FBQztJQURkLENBQUM7SUFHRCxnQ0FBUyxHQUFUO1FBQ0EsbUJBQW1CO1FBQ25CLHVDQUF1QztRQUN2QyxnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLGlEQUFpRDtRQUNqRCx5Q0FBeUM7UUFDekMsTUFBTTtRQUNOLFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIsZ0NBQWdDO1FBQ2hDLFNBQVM7UUFDVCxnQ0FBZ0M7UUFDaEMsbUNBQW1DO1FBQ25DLFFBQVE7UUFDUixLQUFLO1FBQ0gsbUNBQW1DO0lBQ3JDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksWUFBWTtJQWJ4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxzVkFPRztRQUNiLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQ2pDLENBQUM7cUNBRWlDLDJCQUFXO0dBRGpDLFlBQVksQ0F1QnhCO0FBdkJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGU6IGAgICAgPFN0YWNrTGF5b3V0PlxuICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxuICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxuICA8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIj48L1RleHRGaWVsZD5cblxuICA8QnV0dG9uIHRleHQ9XCJTaWduIGluXCIgKHRhcCk9XCJjaGVja0F1dGgoKVwiPjwvQnV0dG9uPlxuICA8QnV0dG9uIHRleHQ9XCJTaWduIHVwIGZvciBHcm9jZXJpZXNcIj48L0J1dHRvbj5cbjwvU3RhY2tMYXlvdXQ+YCxcbiAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcbiAgfVxuICB0aXRsZSA9ICdhcHAnO1xuICBcbiAgY2hlY2tBdXRoKCkge1xuICAvLyBmaXJlYmFzZS5sb2dpbih7XG4gIC8vICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkZBQ0VCT09LLFxuICAvLyAgIC8vIE9wdGlvbmFsXG4gIC8vICAgZmFjZWJvb2tPcHRpb25zOiB7XG4gIC8vICAgICAvLyBkZWZhdWx0cyB0byBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ11cbiAgLy8gICAgIHNjb3BlOiBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ11cbiAgLy8gICB9XG4gIC8vIH0pLnRoZW4oXG4gIC8vICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gIC8vICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gIC8vICAgICB9LFxuICAvLyAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAvLyAgICAgfVxuICAvLyApO1xuICAgIC8vIHRoaXMuYXV0aFNlcnZpY2UuZmFjZWJvb2tMb2dpbigpXG4gIH1cbn1cbiJdfQ==