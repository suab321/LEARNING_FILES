import  cv2
import numpy as np
import math

video=cv2.VideoCapture(0)

t=1;
while t:
    _,original_frame=video.read()
    cv2.imshow("original",original_frame)

    cv2.rectangle(original_frame,(20,20),(300,300),(0,255,192),1)
    cv2.imshow("original",original_frame)

    crop_image=original_frame[20:300,20:300]
    cv2.imshow("cropped",crop_image)

    kernal=np.ones((5,5))

    blur_image=cv2.GaussianBlur(crop_image,(3,3),0)
    hsv_image=cv2.cvtColor(blur_image,cv2.COLOR_BGR2HSV)
    cv2.imshow("hsv",hsv_image)
    mask=cv2.inRange(hsv_image,np.array([2,0,0]),np.array([20,255,255]))

    dilate_image=cv2.dilate(mask,kernal,iterations=1)
    erode_image=cv2.erode(dilate_image,kernal,iterations=1)

    filtered=cv2.GaussianBlur(erode_image,(3,3),0)
    ret,thresh=cv2.threshold(filtered,127,255,0)
    cv2.imshow("threshold",thresh)

    contours,hieracy=cv2.findContours(thresh,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)

    try:
        contour = max(contours, key=lambda x: cv2.contourArea(x))
        x,y,w,h=cv2.boundingRect(contour)
        cv2.rectangle(crop_image,(x,y),(x+w,y+h),(0,0,255),0)
        convex=cv2.convexHull(contour)
        drawing=np.zeros(crop_image.shape,np.uint8)

        cv2.drawContours(drawing,contour,-1,(0,255,0),0)
        cv2.drawContours(drawing,contour,-1,(0,0,255),0)

        hull=cv2.convexHull(contour,returnPoints=False)
        defects=cv2.convexityDefects(contour,hull)
        count_defects = 0

        for i in range(defects.shape[0]):
            s, e, f, d = defects[i, 0]
            start = tuple(contour[s][0])
            end = tuple(contour[e][0])
            far = tuple(contour[f][0])

            a = math.sqrt((end[0] - start[0]) ** 2 + (end[1] - start[1]) ** 2)
            b = math.sqrt((far[0] - start[0]) ** 2 + (far[1] - start[1]) ** 2)
            c = math.sqrt((end[0] - far[0]) ** 2 + (end[1] - far[1]) ** 2)
            angle = (math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)) * 180) / 3.14

            # if angle > 90 draw a circle at the far point
            if angle <= 90:
                count_defects += 1
                cv2.circle(crop_image,far, 1, [0, 0, 255], -1)

            cv2.line(crop_image, start, end, [0, 255, 0], 2)
        if count_defects == 1:
            cv2.putText(original_frame, "ONE", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), 2)
        elif count_defects == 2:
            cv2.putText(original_frame, "TWO", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), 2)
        elif count_defects == 3:
            cv2.putText(original_frame, "THREE", (5, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), 2)
        elif count_defects == 4:
            cv2.putText(original_frame, "FOUR", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), 2)
        elif count_defects == 5:
            cv2.putText(original_frame, "FIVE", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), 2)
        else:
            pass
    except:
            pass

    cv2.imshow("count",original_frame)
    if cv2.waitKey(1) == ord('q'):
        t=0




