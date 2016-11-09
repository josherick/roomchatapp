//
//  ViewController.swift
//  RoomChat
//
//  Created by Josh Sherick on 10/18/16.
//  Copyright © 2016 Josh Sherick. All rights reserved.
//

import UIKit
import Foundation

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        NotificationCenter.default.addObserver(self, selector: #selector(keyboardShown), name: NSNotification.Name.UIKeyboardDidShow, object: nil)

        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBOutlet weak var messages: UIScrollView!
    
    @IBOutlet weak var input: UITextField!
    @IBOutlet weak var sendButton: UIButton!
    @IBOutlet weak var message1: UITextView!
    @IBOutlet weak var camera: UIButton!
    
    func keyboardShown(_ notification: Notification) {
        let info  = (notification as NSNotification).userInfo!
        let value: AnyObject = info[UIKeyboardFrameEndUserInfoKey]! as AnyObject
        
        let rawFrame = value.cgRectValue
        let keyboardFrame = view.convert(rawFrame!, from: nil)
        let keyboardHeight = keyboardFrame.size.height
        UIView.animate(withDuration: 0.5, animations: {
            self.input.center.y -= keyboardHeight
            self.sendButton.center.y -= keyboardHeight
            self.camera.center.y -= keyboardHeight
            
        })
        
        print("keyboardFrame: \(keyboardFrame)")
    }


}

