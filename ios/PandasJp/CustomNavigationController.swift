import UIKit

@objc(CustomNavigationController) // 添加這行以暴露給 Objective-C
class CustomNavigationController: UINavigationController {
    override func viewDidLoad() {
        super.viewDidLoad()
        setupCustomBackGesture()
    }

    private func setupCustomBackGesture() {
        if let edgePan = interactivePopGestureRecognizer {
            view.removeGestureRecognizer(edgePan)
        }
        let customPan = UIPanGestureRecognizer(target: self, action: #selector(handleCustomPan(_:)))
        customPan.delegate = self
        view.addGestureRecognizer(customPan)
    }

    @objc private func handleCustomPan(_ recognizer: UIPanGestureRecognizer) {
        let location = recognizer.location(in: view)
        guard location.x < 200 else { return }
        if recognizer.state == .began {
            let velocity = recognizer.velocity(in: view)
            if velocity.x > 0 && viewControllers.count > 1 {
                popViewController(animated: true)
            }
        }
    }
}

extension CustomNavigationController: UIGestureRecognizerDelegate {
    func gestureRecognizerShouldBegin(_ gestureRecognizer: UIGestureRecognizer) -> Bool {
        return viewControllers.count > 1
    }
}