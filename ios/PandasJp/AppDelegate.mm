#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTLinkingManager.h>
#import "PandasJp-Swift.h" // 使用自動生成的 Swift 頭文件

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"PandasJp";
  self.initialProps = @{};

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                  moduleName:self.moduleName
                                           initialProperties:self.initialProps];

  rootView.backgroundColor = [UIColor blackColor];
  CustomNavigationController *navController = [[CustomNavigationController alloc] initWithRootViewController:rootView];
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.rootViewController = navController;
  [self.window makeKeyAndVisible];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// 其他方法保持不變...
@end