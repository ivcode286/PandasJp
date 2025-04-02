import UIKit

class CustomNavigationController: UINavigationController {
    override func viewDidLoad() {
        super.viewDidLoad()
        setupCustomBackGesture()
    }

    private func setupCustomBackGesture() {
        // 移除預設邊緣手勢
        if let edgePan = interactivePopGestureRecognizer {
            view.removeGestureRecognizer(edgePan)
        }

        // 添加自定義手勢識別器
        let customPan = UIPanGestureRecognizer(target: self, action: #selector(handleCustomPan(_:)))
        customPan.delegate = self
        view.addGestureRecognizer(customPan)
    }

    @objc private func handleCustomPan(_ recognizer: UIPanGestureRecognizer) {
        let translation = recognizer.translation(in: view)
        let velocity = recognizer.velocity(in: view)
        let location = recognizer.location(in: view)

        // 定義觸發區域（左邊 200 像素）
        guard location.x < 200 else { return }

        // 模擬返回手勢邏輯
        if recognizer.state == .began {
            if velocity.x > 0 && viewControllers.count > 1 {
                popViewController(animated: true)
            }
        }
    }
}

extension CustomNavigationController: UIGestureRecognizerDelegate {
    func gestureRecognizerShouldBegin(_ gestureRecognizer: UIGestureRecognizer) -> Bool {
        return viewControllers.count > 1 // 僅在堆疊中有多個控制器時啟用
    }
}